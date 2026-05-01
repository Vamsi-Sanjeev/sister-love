import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Volume2, VolumeX, Play, Pause, Upload, Music } from 'lucide-react';

const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState('/neetho-unte-chalu.mp3');
  const [trackName, setTrackName] = useState('Neetho Unte Chalu');
  const audioRef = useRef<HTMLAudioElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = isMuted ? 0 : volume;
      
      const handleUserInteraction = () => {
        if (audio && !isPlaying) {
          audio.play().then(() => {
            setIsPlaying(true);
          }).catch(error => {
            console.log('Auto-play prevented:', error);
          });
        }
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
      };

      document.addEventListener('click', handleUserInteraction);
      document.addEventListener('keydown', handleUserInteraction);

      return () => {
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
      };
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.log('Play failed:', error);
      });
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    if (value[0] > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('audio/')) {
      const url = URL.createObjectURL(file);
      setCurrentTrack(url);
      setTrackName(file.name.replace(/\.[^/.]+$/, ''));
      
      // Reset and play new track
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
        audioRef.current.load();
        
        // Auto-play new track
        setTimeout(() => {
          audioRef.current?.play().then(() => {
            setIsPlaying(true);
          }).catch(error => {
            console.log('Auto-play prevented:', error);
          });
        }, 100);
      }
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const resetToDefault = () => {
    setCurrentTrack('/neetho-unte-chalu.mp3');
    setTrackName('Neetho Unte Chalu');
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      audioRef.current.load();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src={currentTrack}
        preload="auto"
      />
      
      <div className="fixed bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 z-50 w-80">
        <div className="flex flex-col gap-3">
          {/* Track Info */}
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Music className="h-4 w-4" />
            <span className="truncate">{trackName}</span>
          </div>

          {/* Main Controls */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={togglePlayPause}
              className="h-8 w-8 p-0"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMute}
              className="h-8 w-8 p-0"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </Button>

            <div className="flex-1">
              <Slider
                value={[isMuted ? 0 : volume]}
                onValueChange={handleVolumeChange}
                max={1}
                min={0}
                step={0.1}
                className="w-full"
              />
            </div>
          </div>

          {/* Upload Controls */}
          <div className="flex items-center gap-2 pt-2 border-t border-gray-200">
            <input
              ref={fileInputRef}
              type="file"
              accept="audio/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            
            <Button
              variant="outline"
              size="sm"
              onClick={openFileDialog}
              className="flex-1 h-7 text-xs"
            >
              <Upload className="h-3 w-3 mr-1" />
              Upload Music
            </Button>

            {currentTrack !== '/neetho-unte-chalu.mp3' && (
              <Button
                variant="ghost"
                size="sm"
                onClick={resetToDefault}
                className="h-7 text-xs px-2"
              >
                Reset
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundMusic;
