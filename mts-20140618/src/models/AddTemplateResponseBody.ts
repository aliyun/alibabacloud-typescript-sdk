// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTemplateResponseBodyTemplateAudioVolume extends $dara.Model {
  /**
   * @remarks
   * The output volume.
   * 
   * This parameter takes effect only when the value of Method is dynamic.
   * 
   * Unit: dB.
   * 
   * Valid values: [-70,-5].
   * 
   * Default value: -6.
   * 
   * @example
   * -6
   */
  integratedLoudnessTarget?: string;
  /**
   * @remarks
   * The volume adjustment range.
   * 
   * *   Default value: **-20**.
   * *   Unit: dB.
   * 
   * @example
   * -20
   */
  level?: string;
  /**
   * @remarks
   * The range of the volume relative to the output volume.
   * 
   * This parameter takes effect only when the value of Method is dynamic.
   * 
   * Unit: dB.
   * 
   * Valid values: [1,20].
   * 
   * Default value: 8.
   * 
   * @example
   * 8
   */
  loudnessRangeTarget?: string;
  /**
   * @remarks
   * The volume adjustment method. Valid values:
   * 
   * *   **auto**: The volume is automatically adjusted.
   * *   **dynamic**: The volume is dynamically adjusted.
   * *   **linear**: The volume is linearly adjusted.
   * 
   * @example
   * auto
   */
  method?: string;
  /**
   * @remarks
   * The volume adjustment coefficient.
   * 
   * This parameter takes effect only when the value of Method is adaptive.
   * 
   * Valid values: [0,1].
   * 
   * Default value: 0.9.
   * 
   * @example
   * 0.9
   */
  peakLevel?: string;
  /**
   * @remarks
   * The peak volume.
   * 
   * This parameter takes effect only when the value of Method is dynamic.
   * 
   * Unit: dB.
   * 
   * Valid values: [-9,0].
   * 
   * Default value: -1.
   * 
   * @example
   * 0
   */
  truePeak?: string;
  static names(): { [key: string]: string } {
    return {
      integratedLoudnessTarget: 'IntegratedLoudnessTarget',
      level: 'Level',
      loudnessRangeTarget: 'LoudnessRangeTarget',
      method: 'Method',
      peakLevel: 'PeakLevel',
      truePeak: 'TruePeak',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integratedLoudnessTarget: 'string',
      level: 'string',
      loudnessRangeTarget: 'string',
      method: 'string',
      peakLevel: 'string',
      truePeak: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplateAudio extends $dara.Model {
  /**
   * @remarks
   * The audio bitrate of the output file.
   * 
   * *   Unit: Kbit/s.
   * *   Default value: **128**.
   * 
   * @example
   * 500
   */
  bitrate?: string;
  /**
   * @remarks
   * The number of sound channels. Default value: **2**.
   * 
   * @example
   * 2
   */
  channels?: string;
  /**
   * @remarks
   * The audio codec format. Default value: **aac**. Valid values:
   * 
   * *   **aac**
   * *   **mp3**
   * *   **vorbis**
   * *   **flac**
   * 
   * @example
   * aac
   */
  codec?: string;
  /**
   * @remarks
   * The codec profile of the audio. Valid values if the **Codec** parameter is set to **AAC**:
   * 
   * *   **aac_low**
   * *   **aac_he**
   * *   **aac_he_v2**
   * *   **aac_ld**
   * *   **aac_eld**
   * 
   * @example
   * aac_low
   */
  profile?: string;
  /**
   * @remarks
   * The level of the independent denoising algorithm.
   * 
   * @example
   * 5
   */
  qscale?: string;
  /**
   * @remarks
   * Indicates whether the audio stream is deleted.
   * 
   * *   **true**: The audio stream is deleted.
   * *   **false**: The audio stream is retained.
   * *   Default value: **false**.
   * 
   * @example
   * true
   */
  remove?: string;
  /**
   * @remarks
   * The sampling rate.
   * 
   * *   Unit: Hz.
   * *   Default value: **44100**.
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  /**
   * @remarks
   * The volume control configurations
   */
  volume?: AddTemplateResponseBodyTemplateAudioVolume;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      qscale: 'Qscale',
      remove: 'Remove',
      samplerate: 'Samplerate',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
      qscale: 'string',
      remove: 'string',
      samplerate: 'string',
      volume: AddTemplateResponseBodyTemplateAudioVolume,
    };
  }

  validate() {
    if(this.volume && typeof (this.volume as any).validate === 'function') {
      (this.volume as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplateContainer extends $dara.Model {
  /**
   * @remarks
   * The container format.
   * 
   * @example
   * mp4
   */
  format?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplateMuxConfigGif extends $dara.Model {
  /**
   * @remarks
   * The color dithering algorithm of the palette. Valid values: sierra and bayer.
   * 
   * @example
   * sierra
   */
  ditherMode?: string;
  /**
   * @remarks
   * The duration for which the final frame is paused. Unit: centiseconds.
   * 
   * @example
   * 0
   */
  finalDelay?: string;
  /**
   * @remarks
   * Indicates whether the custom palette is used.
   * 
   * @example
   * false
   */
  isCustomPalette?: string;
  /**
   * @remarks
   * The loop count.
   * 
   * @example
   * 0
   */
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      ditherMode: 'DitherMode',
      finalDelay: 'FinalDelay',
      isCustomPalette: 'IsCustomPalette',
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ditherMode: 'string',
      finalDelay: 'string',
      isCustomPalette: 'string',
      loop: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplateMuxConfigSegment extends $dara.Model {
  /**
   * @remarks
   * The length of the segment. Unit: seconds.
   * 
   * @example
   * 10
   */
  duration?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplateMuxConfigWebp extends $dara.Model {
  /**
   * @remarks
   * The loop count.
   * 
   * @example
   * 0
   */
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loop: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplateMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The transmuxing settings for GIF.
   */
  gif?: AddTemplateResponseBodyTemplateMuxConfigGif;
  /**
   * @remarks
   * The segment settings.
   */
  segment?: AddTemplateResponseBodyTemplateMuxConfigSegment;
  /**
   * @remarks
   * The transmuxing settings for WebP.
   */
  webp?: AddTemplateResponseBodyTemplateMuxConfigWebp;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
      webp: 'Webp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: AddTemplateResponseBodyTemplateMuxConfigGif,
      segment: AddTemplateResponseBodyTemplateMuxConfigSegment,
      webp: AddTemplateResponseBodyTemplateMuxConfigWebp,
    };
  }

  validate() {
    if(this.gif && typeof (this.gif as any).validate === 'function') {
      (this.gif as any).validate();
    }
    if(this.segment && typeof (this.segment as any).validate === 'function') {
      (this.segment as any).validate();
    }
    if(this.webp && typeof (this.webp as any).validate === 'function') {
      (this.webp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplateTransConfig extends $dara.Model {
  /**
   * @remarks
   * The method of resolution adjustment. Default value: **none**. Valid values:
   * 
   * *   **rescale**: The input video is rescaled.
   * *   **crop**: The input video is cropped.
   * *   **none**: No change is made.
   * 
   * @example
   * rescale
   */
  adjDarMethod?: string;
  /**
   * @remarks
   * Indicates whether the audio bitrate is checked.
   * 
   * If this feature is enabled and the system detects that the audio bitrate of the output file is greater than that of the input file, the audio bitrate of the input file is retained after transcoding.
   * 
   * *   **true**: The audio bitrate is checked.
   * *   **false**: The audio bitrate is not checked.
   * *   Default value: **false**.
   * 
   * @example
   * true
   */
  isCheckAudioBitrate?: string;
  /**
   * @remarks
   * Indicates whether the audio bitrate is checked. If this feature is enabled and the system detects that the audio bitrate of the output file is higher than that of the input file, the input file is not transcoded. This parameter has a higher priority than the **IsCheckAudioBitrate** parameter. Valid values:
   * 
   * *   **true**: The audio bitrate is checked. In this case, if the audio bitrate of the output file is higher than that of the input file, the input file is not transcoded.
   * *   **false**: The audio bitrate is not checked.
   * *   Default value: **false**.
   * 
   * @example
   * true
   */
  isCheckAudioBitrateFail?: string;
  /**
   * @remarks
   * Indicates whether the resolution is checked.
   * 
   * *   **true**: The resolution is checked.
   * *   **false**: The resolution is not checked.
   * *   Default value: **false**.
   * 
   * > If this feature is enabled and the system detects that the resolution of the output file is higher than that of the input file based on the width or height, the resolution of the input file is retained after transcoding.
   * 
   * @example
   * true
   */
  isCheckReso?: string;
  /**
   * @remarks
   * Indicates whether the resolution is checked.
   * 
   * *   **true**: The resolution is checked.
   * *   **false**: The resolution is not checked.
   * *   Default value: **false**.
   * 
   * > If this feature is enabled and the system detects that the resolution of the output file is higher than that of the input file based on the width or height, an error that indicates a transcoding failure is returned.
   * 
   * @example
   * true
   */
  isCheckResoFail?: string;
  /**
   * @remarks
   * Indicates whether the video bitrate is checked.
   * 
   * *   **true**: The video bitrate is checked.
   * *   **false**: The video bitrate is not checked.
   * *   Default value: **false**.
   * 
   * > If this feature is enabled and the system detects that the video bitrate of the output file is greater than that of the input file, the video bitrate of the input file is retained after transcoding.
   * 
   * @example
   * true
   */
  isCheckVideoBitrate?: string;
  /**
   * @remarks
   * Indicates whether the video bitrate is checked. If this feature is enabled and the system detects that the video bitrate of the output file is higher than that of the input file, the input file is not transcoded. This parameter has a higher priority than the IsCheckVideoBitrate parameter.
   * 
   * *   **true**: The video bitrate is checked. In this case, if the video bitrate of the output file is higher than that of the input file, the input file is not transcoded.
   * *   **false**: The video bitrate is not checked.
   * *   Default value: **false**.
   * 
   * @example
   * true
   */
  isCheckVideoBitrateFail?: string;
  /**
   * @remarks
   * The transcoding mode. Valid values:
   * 
   * *   **onepass**
   * *   **twopass**
   * *   **CBR**
   * *   Default value: **onepass**.
   * 
   * @example
   * onepass
   */
  transMode?: string;
  static names(): { [key: string]: string } {
    return {
      adjDarMethod: 'AdjDarMethod',
      isCheckAudioBitrate: 'IsCheckAudioBitrate',
      isCheckAudioBitrateFail: 'IsCheckAudioBitrateFail',
      isCheckReso: 'IsCheckReso',
      isCheckResoFail: 'IsCheckResoFail',
      isCheckVideoBitrate: 'IsCheckVideoBitrate',
      isCheckVideoBitrateFail: 'IsCheckVideoBitrateFail',
      transMode: 'TransMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjDarMethod: 'string',
      isCheckAudioBitrate: 'string',
      isCheckAudioBitrateFail: 'string',
      isCheckReso: 'string',
      isCheckResoFail: 'string',
      isCheckVideoBitrate: 'string',
      isCheckVideoBitrateFail: 'string',
      transMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplateVideoBitrateBnd extends $dara.Model {
  /**
   * @remarks
   * The maximum bitrate.
   * 
   * @example
   * 1500
   */
  max?: string;
  /**
   * @remarks
   * The minimum bitrate.
   * 
   * @example
   * 800
   */
  min?: string;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'string',
      min: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplateVideoNarrowBand extends $dara.Model {
  /**
   * @remarks
   * The upper limit of the dynamic bitrate. If this parameter is set, the average bitrate is in the range of (0, 1000000].
   * 
   * @example
   * 3000
   */
  abrmax?: number;
  /**
   * @remarks
   * The maximum ratio of the upper limit of dynamic bitrate. If this parameter is set, the value of Abrmax does not exceed x times of the source video bitrate. Valid values: (0,1.0].
   * 
   * @example
   * 1.0
   */
  maxAbrRatio?: number;
  /**
   * @remarks
   * The Narrowband HD version. Only 1.0 may be returned.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      abrmax: 'Abrmax',
      maxAbrRatio: 'MaxAbrRatio',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abrmax: 'number',
      maxAbrRatio: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplateVideo extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the output video. Unit: Kbit/s.
   * 
   * @example
   * 500
   */
  bitrate?: string;
  /**
   * @remarks
   * The bitrate range of the video.
   */
  bitrateBnd?: AddTemplateResponseBodyTemplateVideoBitrateBnd;
  /**
   * @remarks
   * The size of the buffer.
   * 
   * *   Default value: **6000**.
   * *   Unit: KB.
   * 
   * @example
   * 6000
   */
  bufsize?: string;
  /**
   * @remarks
   * The video codec. Valid values: H.264, H.265, GIF, and WebP. Default value: **H.264**.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The constant rate factor. Default value if the video codec is set to H.264: **23**. Default value if the video codec is set to H.265: **26**.
   * 
   * > If this parameter is specified, the setting of the Bitrate parameter becomes invalid.
   * 
   * @example
   * 15
   */
  crf?: string;
  /**
   * @remarks
   * The method of video cropping. Valid values:
   * 
   * *   **border**: automatically detects and removes borders.
   * *   **Value in the format of width:height:left:top**: crops the video image based on the custom settings. Example: 1280:800:0:140.
   * 
   * @example
   * border
   */
  crop?: string;
  /**
   * @remarks
   * The level of quality control on the video.
   * 
   * @example
   * 10
   */
  degrain?: string;
  /**
   * @remarks
   * The frame rate. Default value: the frame rate of the input file. The value is 60 if the frame rate of the input file exceeds 60. Unit: frames per second.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The GOP size. The GOP size can be the maximum interval of keyframes or the maximum number of frames in a frame group. If the maximum interval is specified, the value contains the unit (s). If the maximum number of frames is specified, the value does not contain a unit. Default value: **10s**.
   * 
   * @example
   * 10s
   */
  gop?: string;
  /**
   * @remarks
   * Indicates whether the HDR2SDR conversion feature is enabled. If this feature is enabled, high dynamic range (HDR) videos are transcoded to standard dynamic range (SDR) videos.
   * 
   * @example
   * true
   */
  hdr2sdr?: string;
  /**
   * @remarks
   * The height of the video.
   * 
   * *   Unit: pixel.
   * *   Default value: the height of the input video.
   * 
   * @example
   * 800
   */
  height?: string;
  /**
   * @remarks
   * Indicates whether the auto-rotate screen feature is enabled. Default value: **false**. Valid values:
   * 
   * *   **true**: The auto-rotate screen feature is enabled.
   * *   **false**: The auto-rotate screen feature is disabled.
   * 
   * > If this feature is enabled, the width of the output video corresponds to the long side of the input video, which is the height of the input video in portrait mode. The height of the output video corresponds to the short side of the input video, which is the width of the input video in portrait mode.
   * 
   * @example
   * false
   */
  longShortMode?: string;
  /**
   * @remarks
   * The maximum frame rate.
   * 
   * @example
   * 60
   */
  maxFps?: string;
  /**
   * @remarks
   * The maximum bitrate of the video. Unit: Kbit/s.
   * 
   * @example
   * 500
   */
  maxrate?: string;
  /**
   * @remarks
   * The Narrowband HD settings.
   */
  narrowBand?: AddTemplateResponseBodyTemplateVideoNarrowBand;
  /**
   * @remarks
   * The black borders to be added to the video. The value is in the width:height:left:top format.
   * 
   * @example
   * 1280:800:0:140
   */
  pad?: string;
  /**
   * @remarks
   * The pixel format. Standard pixel formats such as yuv420p and yuvj420p are supported. The default pixel format can be **yuv420p** or the pixel format of the input video.
   * 
   * @example
   * yuv420p
   */
  pixFmt?: string;
  /**
   * @remarks
   * The preset video algorithm. Default value: **medium**. Valid values:
   * 
   * *   **veryfast**
   * *   **fast**
   * *   **medium**
   * *   **slow**
   * *   **slower**
   * 
   * > This parameter is valid only if the Codec parameter is set to H.264.
   * 
   * @example
   * fast
   */
  preset?: string;
  /**
   * @remarks
   * The codec profile.
   * 
   * *   **baseline**: suitable for mobile devices
   * *   **main**: suitable for standard-definition devices
   * *   **high**: suitable for high-definition devices
   * *   Default value: **high**.
   * 
   * If multiple definitions are available, we recommend that you set this parameter to baseline for the lowest definition to ensure normal playback on low-end devices. Set this parameter to main or high for other definitions.
   * 
   * > This parameter is valid only if the Codec parameter is set to H.264.
   * 
   * @example
   * high
   */
  profile?: string;
  /**
   * @remarks
   * The level of the independent denoising algorithm.
   * 
   * @example
   * 1
   */
  qscale?: string;
  /**
   * @remarks
   * Indicates whether the video stream is deleted.
   * 
   * *   **true**: The video stream is deleted.
   * *   **false**: The video stream is retained.
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  remove?: string;
  /**
   * @remarks
   * The policy of resolution adjustment.
   * 
   * @example
   * 0
   */
  resoPriority?: string;
  /**
   * @remarks
   * The scan mode. Valid values:
   * 
   * *   **interlaced**
   * *   **progressive**
   * 
   * @example
   * interlaced
   */
  scanMode?: string;
  /**
   * @remarks
   * The width of the video.
   * 
   * *   Default value: the width of the input video.****
   * *   Unit: pixel.
   * 
   * @example
   * 256
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      bitrateBnd: 'BitrateBnd',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      crop: 'Crop',
      degrain: 'Degrain',
      fps: 'Fps',
      gop: 'Gop',
      hdr2sdr: 'Hdr2sdr',
      height: 'Height',
      longShortMode: 'LongShortMode',
      maxFps: 'MaxFps',
      maxrate: 'Maxrate',
      narrowBand: 'NarrowBand',
      pad: 'Pad',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      qscale: 'Qscale',
      remove: 'Remove',
      resoPriority: 'ResoPriority',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      bitrateBnd: AddTemplateResponseBodyTemplateVideoBitrateBnd,
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      crop: 'string',
      degrain: 'string',
      fps: 'string',
      gop: 'string',
      hdr2sdr: 'string',
      height: 'string',
      longShortMode: 'string',
      maxFps: 'string',
      maxrate: 'string',
      narrowBand: AddTemplateResponseBodyTemplateVideoNarrowBand,
      pad: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      qscale: 'string',
      remove: 'string',
      resoPriority: 'string',
      scanMode: 'string',
      width: 'string',
    };
  }

  validate() {
    if(this.bitrateBnd && typeof (this.bitrateBnd as any).validate === 'function') {
      (this.bitrateBnd as any).validate();
    }
    if(this.narrowBand && typeof (this.narrowBand as any).validate === 'function') {
      (this.narrowBand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplate extends $dara.Model {
  /**
   * @remarks
   * The audio codec configurations.
   */
  audio?: AddTemplateResponseBodyTemplateAudio;
  /**
   * @remarks
   * The container format settings.
   */
  container?: AddTemplateResponseBodyTemplateContainer;
  /**
   * @remarks
   * The ID of the transcoding template. We recommend that you keep this ID for subsequent operation calls.
   * 
   * @example
   * 16f01ad6175e4230ac42bb5182cd****
   */
  id?: string;
  /**
   * @remarks
   * The transmuxing settings.
   */
  muxConfig?: AddTemplateResponseBodyTemplateMuxConfig;
  /**
   * @remarks
   * The name of the transcoding template.
   * 
   * @example
   * mps-example
   */
  name?: string;
  /**
   * @remarks
   * The status of the template. Valid values:
   * 
   * *   **Normal**: The template is normal.
   * *   **Deleted**: The template is deleted.
   * 
   * @example
   * Normal
   */
  state?: string;
  /**
   * @remarks
   * The general transcoding settings.
   */
  transConfig?: AddTemplateResponseBodyTemplateTransConfig;
  /**
   * @remarks
   * The video codec configurations.
   */
  video?: AddTemplateResponseBodyTemplateVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      id: 'Id',
      muxConfig: 'MuxConfig',
      name: 'Name',
      state: 'State',
      transConfig: 'TransConfig',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: AddTemplateResponseBodyTemplateAudio,
      container: AddTemplateResponseBodyTemplateContainer,
      id: 'string',
      muxConfig: AddTemplateResponseBodyTemplateMuxConfig,
      name: 'string',
      state: 'string',
      transConfig: AddTemplateResponseBodyTemplateTransConfig,
      video: AddTemplateResponseBodyTemplateVideo,
    };
  }

  validate() {
    if(this.audio && typeof (this.audio as any).validate === 'function') {
      (this.audio as any).validate();
    }
    if(this.container && typeof (this.container as any).validate === 'function') {
      (this.container as any).validate();
    }
    if(this.muxConfig && typeof (this.muxConfig as any).validate === 'function') {
      (this.muxConfig as any).validate();
    }
    if(this.transConfig && typeof (this.transConfig as any).validate === 'function') {
      (this.transConfig as any).validate();
    }
    if(this.video && typeof (this.video as any).validate === 'function') {
      (this.video as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FA258E67-09B8-4EAA-8F33-BA567834A2C3
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the transcoding template.
   */
  template?: AddTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      template: AddTemplateResponseBodyTemplate,
    };
  }

  validate() {
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

