// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TargetAudioFilterAudio extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to mix all sound tracks into a single track. Valid values:
   * 
   * *   false (default)
   * *   true
   * 
   * @example
   * false
   */
  mixing?: boolean;
  static names(): { [key: string]: string } {
    return {
      mixing: 'Mixing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mixing: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetAudioTranscodeAudio extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the audio stream. Unit: bit/s. This parameter and the **Quality** parameter are mutually exclusive. Valid values: 1000 to 10000000.
   * 
   * @example
   * 64000
   */
  bitrate?: number;
  /**
   * @remarks
   * The audio bitrate option. Valid values:
   * 
   * *   fixed: always uses the target bitrate.
   * *   adaptive: uses the source bitrate when the source bitrate is smaller than the target bitrate.
   * *   fall: returns a failure when the source bitrate is smaller than the target bitrate.
   * 
   * Default values:
   * 
   * *   fixed for the CreateMediaConvert operation.
   * *   adaptive for the GenerateVideoPlaylist operation.
   * 
   * >  This parameter must be used in conjunction with the **Bitrate** parameter.
   * 
   * @example
   * fixed
   */
  bitrateOption?: string;
  /**
   * @remarks
   * The audio bit depth. Valid values: 16 and 24.
   * 
   * >  This parameter takes effect only when Codec is set to flac.
   * 
   * @example
   * 16
   */
  bitsPerSample?: number;
  /**
   * @remarks
   * The number of sound channels. By default, the audio stream has the same number of sound channels as the source audio. Valid values: [1,8].
   * 
   * >  The number of sound channels varies with audio formats: one or two for MP3, up to six for AC3 5.1, and one for AMR.
   * 
   * @example
   * 2
   */
  channel?: number;
  /**
   * @remarks
   * The codec. Valid values:
   * 
   * *   copy, mp3, vorbis, aac, flac, ac3, opus, and amr for the CreateMediaConvert operation. The default value is copy.
   * *   aac for the GenerateVideoPlaylist operation. The default value is aac.
   * 
   * >  When you set the parameter to copy, the audio stream is directly copied into the output file and all other parameters in **TranscodeAudio** do not take effect. The copy value is commonly used in container format conversion scenarios. You cannot use this value in audio merging scenarios.
   * 
   * @example
   * aac
   */
  codec?: string;
  /**
   * @remarks
   * The audio quality. Valid values: 0 to 100. The greater the value, the higher the quality. This parameter and the **Bitrate** parameter are mutually exclusive.
   * 
   * @example
   * 6
   */
  quality?: number;
  /**
   * @remarks
   * The sampling rate option. Unit: Hz. By default, the source sampling rate is used. Valid values: 8000, 12025, 12000, 16000, 22050, 24000, 32000, 44100, 48000, 64000, 88200, and 96000.
   * 
   * >  Supported sampling rates vary with formats: 48 kHz and lower for MP3, 8 kHz, 12 kHz, 16 kHz, 24 kHz, and 48 kHz for Opus, 32 kHz, 44.1 kHz, and 48 kHz for AC3, and 8 kHz and 16 kHz for AMR.
   * 
   * @example
   * 12050
   */
  sampleRate?: number;
  /**
   * @remarks
   * The sampling rate option. Valid values:
   * 
   * *   fixed: always uses the target sampling rate.
   * *   adaptive: uses the source sampling rate when the source sampling rate is smaller than the target sampling rate.
   * *   fall: returns a failure when the source sampling rate is smaller than the target sampling rate.
   * 
   * Default values:
   * 
   * *   fixed for the CreateMediaConvert operation.
   * *   adaptive for the GenerateVideoPlaylist operation.
   * 
   * >  This parameter must be used in conjunction with the **SampleRate** parameter.
   * 
   * @example
   * fixed
   */
  sampleRateOption?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      bitrateOption: 'BitrateOption',
      bitsPerSample: 'BitsPerSample',
      channel: 'Channel',
      codec: 'Codec',
      quality: 'Quality',
      sampleRate: 'SampleRate',
      sampleRateOption: 'SampleRateOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      bitrateOption: 'string',
      bitsPerSample: 'number',
      channel: 'number',
      codec: 'string',
      quality: 'number',
      sampleRate: 'number',
      sampleRateOption: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetAudio extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable audio stream generation. Valid values:
   * 
   * *   true: disables audio stream generation. No audio stream is included in the output file.
   * *   false: does not disable audio stream generation. This is the default value.
   * 
   * @example
   * false
   */
  disableAudio?: boolean;
  /**
   * @remarks
   * The audio processing settings. This parameter is invalid if **TranscodeAudio** is left empty or **TranscodeAudio.Codec** is set to copy.
   * 
   * >  This parameter is not available to the GenerateVideoPlaylist operation.
   */
  filterAudio?: TargetAudioFilterAudio;
  /**
   * @remarks
   * The index numbers of audio streams. If you do not specify this parameter, the first audio stream (the one with the smallest index number) is processed. If the array contains an element greater than 100, all audio streams are processed.
   * 
   * *   For example, you can set the parameter to `[0,1]` to process audio streams with index numbers 0 and 1, `[1]` to process only the audio stream with the index number 1, or `[101]` to process all audio streams.
   * 
   * >  If you specify an index number but no audio stream with the index number is found, the index number is ignored.
   */
  stream?: number[];
  /**
   * @remarks
   * The audio transcoding settings. If you do not specify this parameter, no audio streams are included in the output file.
   * 
   * >  We recommend that you do not use this parameter to disable audio stream generation.
   */
  transcodeAudio?: TargetAudioTranscodeAudio;
  static names(): { [key: string]: string } {
    return {
      disableAudio: 'DisableAudio',
      filterAudio: 'FilterAudio',
      stream: 'Stream',
      transcodeAudio: 'TranscodeAudio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableAudio: 'boolean',
      filterAudio: TargetAudioFilterAudio,
      stream: { 'type': 'array', 'itemType': 'number' },
      transcodeAudio: TargetAudioTranscodeAudio,
    };
  }

  validate() {
    if(this.filterAudio && typeof (this.filterAudio as any).validate === 'function') {
      (this.filterAudio as any).validate();
    }
    if(Array.isArray(this.stream)) {
      $dara.Model.validateArray(this.stream);
    }
    if(this.transcodeAudio && typeof (this.transcodeAudio as any).validate === 'function') {
      (this.transcodeAudio as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

