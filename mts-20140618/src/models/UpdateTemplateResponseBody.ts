// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTemplateResponseBodyTemplateAudioVolume extends $dara.Model {
  /**
   * @remarks
   * The expected volume.
   * 
   * *   This parameter takes effect only if the value of Method is dynamic.
   * *   Unit: decibel.
   * *   Valid values: [-70,-5].
   * *   Default value: -6.
   * 
   * @example
   * -6
   */
  integratedLoudnessTarget?: string;
  /**
   * @remarks
   * The increased volume relative to the volume of the input audio.
   * 
   * *   This parameter takes effect only if the value of Method is linear.
   * *   Unit: decibel.
   * *   Valid values: less than or equal to 20.
   * *   Default value: -20.
   * 
   * @example
   * -20
   */
  level?: string;
  /**
   * @remarks
   * The range of the volume relative to the expected volume.
   * 
   * *   This parameter takes effect only if the value of Method is dynamic.
   * *   Unit: decibel.
   * *   Valid values: [1,20].
   * *   Default value: 8.
   * 
   * @example
   * 8
   */
  loudnessRangeTarget?: string;
  /**
   * @remarks
   * The volume adjustment method. Valid values:
   * 
   * *   **auto**
   * *   **dynamic**
   * *   **linear**
   * 
   * @example
   * auto
   */
  method?: string;
  /**
   * @remarks
   * The volume adjustment coefficient.
   * 
   * This parameter takes effect only if the value of Method is adaptive.
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
   * *   This parameter takes effect only if the value of Method is dynamic.
   * *   Unit: decibel.
   * *   Valid values: [-9,0].
   * *   Default value: -1.
   * 
   * @example
   * -1
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

export class UpdateTemplateResponseBodyTemplateAudio extends $dara.Model {
  /**
   * @remarks
   * The ID of the transcoding template.
   * 
   * @example
   * 500
   */
  bitrate?: string;
  /**
   * @remarks
   * The audio bitrate of the output file.
   * 
   * *   Valid values: 8 to 1000.****
   * *   Unit: Kbit/s.
   * *   Default value: **128**.
   * 
   * @example
   * 2
   */
  channels?: string;
  /**
   * @remarks
   * The sampling rate.
   * 
   * *   Unit: Hz.
   * *   Default value: **44100**.
   * 
   * @example
   * aac
   */
  codec?: string;
  /**
   * @remarks
   * Indicates whether the audio stream is deleted.
   * 
   * *   **true**: The audio stream is deleted.
   * *   **false**: The audio stream is retained.
   * *   Default value: **false**.
   * 
   * @example
   * aac_low
   */
  profile?: string;
  /**
   * @remarks
   * The number of sound channels. Default value: **2**.
   * 
   * @example
   * 1
   */
  qscale?: string;
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
   * false
   */
  remove?: string;
  /**
   * @remarks
   * The level of the independent denoising algorithm.
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  /**
   * @remarks
   * The volume control configurations.
   */
  volume?: UpdateTemplateResponseBodyTemplateAudioVolume;
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
      volume: UpdateTemplateResponseBodyTemplateAudioVolume,
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

export class UpdateTemplateResponseBodyTemplateContainer extends $dara.Model {
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

export class UpdateTemplateResponseBodyTemplateMuxConfigGif extends $dara.Model {
  /**
   * @remarks
   * The loop count.
   * 
   * @example
   * bayer
   */
  ditherMode?: string;
  /**
   * @remarks
   * The color dithering algorithm of the palette. Valid values: sierra and bayer.
   * 
   * @example
   * false
   */
  finalDelay?: string;
  /**
   * @remarks
   * The segment configurations.
   * 
   * @example
   * 0
   */
  isCustomPalette?: string;
  /**
   * @remarks
   * Indicates whether the custom palette is used.
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

export class UpdateTemplateResponseBodyTemplateMuxConfigSegment extends $dara.Model {
  /**
   * @remarks
   * The name of the template.
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

export class UpdateTemplateResponseBodyTemplateMuxConfigWebp extends $dara.Model {
  /**
   * @remarks
   * The transmuxing configurations for GIF.
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

export class UpdateTemplateResponseBodyTemplateMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The duration for which the final frame is paused. Unit: milliseconds.
   */
  gif?: UpdateTemplateResponseBodyTemplateMuxConfigGif;
  /**
   * @remarks
   * The length of the segment. Unit: seconds.
   */
  segment?: UpdateTemplateResponseBodyTemplateMuxConfigSegment;
  /**
   * @remarks
   * The loop count.
   */
  webp?: UpdateTemplateResponseBodyTemplateMuxConfigWebp;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
      webp: 'Webp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: UpdateTemplateResponseBodyTemplateMuxConfigGif,
      segment: UpdateTemplateResponseBodyTemplateMuxConfigSegment,
      webp: UpdateTemplateResponseBodyTemplateMuxConfigWebp,
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

export class UpdateTemplateResponseBodyTemplateTransConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the video bitrate is checked. If this parameter is set to true and the system detects that the video bitrate of the output file is greater than that of the input file, the video bitrate of the input file is retained after transcoding. Valid values:
   * 
   * *   **true**: The video bitrate is checked.
   * *   **false**: The video bitrate is not checked.
   * *   Default value: **false**.
   * 
   * @example
   * none
   */
  adjDarMethod?: string;
  /**
   * @remarks
   * The transcoding mode. Default value: **onepass**. Valid values:
   * 
   * *   **onepass**
   * *   **twopass**
   * *   **CBR**
   * 
   * @example
   * false
   */
  isCheckAudioBitrate?: string;
  /**
   * @remarks
   * The status of the template. Valid values:
   * 
   * *   **Normal**: The template is normal.
   * *   **Deleted**: The template is deleted.
   * 
   * @example
   * false
   */
  isCheckAudioBitrateFail?: string;
  /**
   * @remarks
   * Indicates whether the video bitrate is checked. This parameter has a higher priority than the IsCheckVideoBitrate parameter. Valid values:
   * 
   * *   **true**: The video bitrate is checked
   * *   **false**: The video bitrate is not checked.
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  isCheckReso?: string;
  /**
   * @remarks
   * Indicates whether the audio bitrate is checked. This parameter has a higher priority than the IsCheckAudioBitrate parameter. Valid values:
   * 
   * *   **true**: The audio bitrate is checked.
   * *   **false**: The audio bitrate is not checked.
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  isCheckResoFail?: string;
  /**
   * @remarks
   * Indicates whether the resolution is checked. If this parameter is set to true and the system detects that the resolution of the output file is higher than that of the input file based on the width or height, an error that indicates a transcoding failure is returned. Valid values:
   * 
   * *   **true**: The resolution is checked.
   * *   **false**: The resolution is not checked.
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  isCheckVideoBitrate?: string;
  /**
   * @remarks
   * The method of resolution adjustment. Default value: **none**. Valid values:
   * 
   * *   rescale: The input video is rescaled.
   * *   crop: The input video is cropped.
   * *   none: No change is made.
   * 
   * @example
   * false
   */
  isCheckVideoBitrateFail?: string;
  /**
   * @remarks
   * Indicates whether the resolution is checked. If the output resolution is higher than the input resolution based on the width or height, the input resolution is retained after transcoding. Valid values:
   * 
   * *   **true**: The resolution is checked.
   * *   **false**: The resolution is not checked.
   * *   Default value: **false**.
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

export class UpdateTemplateResponseBodyTemplateVideoBitrateBnd extends $dara.Model {
  /**
   * @remarks
   * The lower limit of the total bitrate. Unit: Kbit/s.
   * 
   * @example
   * 500
   */
  max?: string;
  /**
   * @remarks
   * The pixel format. Valid values: standard pixel formats such as yuv420p and yuvj420p.
   * 
   * @example
   * 100
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

export class UpdateTemplateResponseBodyTemplateVideoNarrowBand extends $dara.Model {
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

export class UpdateTemplateResponseBodyTemplateVideo extends $dara.Model {
  /**
   * @remarks
   * The maximum bitrate of the video. Unit: Kbit/s.
   * 
   * @example
   * 200
   */
  bitrate?: string;
  /**
   * @remarks
   * The upper limit of the total bitrate. Unit: Kbit/s.
   */
  bitrateBnd?: UpdateTemplateResponseBodyTemplateVideoBitrateBnd;
  /**
   * @remarks
   * The level of quality control on the video.
   * 
   * @example
   * 6000
   */
  bufsize?: string;
  /**
   * @remarks
   * The height of the output video.
   * 
   * *   Unit: pixel.
   * *   Default value: the height of the input video.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * Indicates whether the video stream is deleted. Valid values:
   * 
   * *   **true**: The video stream is deleted.
   * *   **false**: The video stream is retained.
   * *   Default value: **false**.
   * 
   * @example
   * 15
   */
  crf?: string;
  /**
   * @remarks
   * The average bitrate of the video. Unit: Kbit/s.
   * 
   * @example
   * border
   */
  crop?: string;
  /**
   * @remarks
   * The average bitrate range of the video.
   * 
   * @example
   * 10
   */
  degrain?: string;
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
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The width of the video.
   * 
   * *   Unit: pixel.
   * *   Default value: **the width of the input video**.
   * 
   * @example
   * 10
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
   * The level of the independent denoising algorithm.
   * 
   * @example
   * 800
   */
  height?: string;
  /**
   * @remarks
   * The size of the buffer.
   * 
   * *   Unit: KB.
   * *   Default value: **6000**.
   * 
   * @example
   * false
   */
  longShortMode?: string;
  /**
   * @remarks
   * The encoding profile. Valid values:
   * 
   * *   **baseline**: applicable to mobile devices.
   * *   **main**: applicable to standard-definition devices.
   * *   **high**: applicable to high-definition devices.
   * *   Default value: **high**.
   * 
   * @example
   * 60
   */
  maxFps?: string;
  /**
   * @remarks
   * The maximum frame rate.
   * 
   * @example
   * 500
   */
  maxrate?: string;
  /**
   * @remarks
   * The Narrowband HD settings.
   */
  narrowBand?: UpdateTemplateResponseBodyTemplateVideoNarrowBand;
  /**
   * @remarks
   * The video codec. Default value: **H.264**.
   * 
   * @example
   * 1280:800:0:140
   */
  pad?: string;
  /**
   * @remarks
   * The black borders added to the video.
   * 
   * *   Format: width:height:left:top.
   * *   Example: 1280:800:0:140.
   * 
   * @example
   * yuv420p
   */
  pixFmt?: string;
  /**
   * @remarks
   * The scan mode. Valid values:
   * 
   * *   **interlaced**: An interlaced scan is performed.
   * *   **progressive**: A progressive scan is performed.
   * 
   * @example
   * medium
   */
  preset?: string;
  /**
   * @remarks
   * The bitrate quality control factor.
   * 
   * *   Default value if the Codec parameter is set to H.264: **23**. Default value if the Codec parameter is set to H.265: **26**.
   * *   If this parameter is returned, the setting of the Bitrate parameter is invalid.
   * 
   * @example
   * high
   */
  profile?: string;
  /**
   * @remarks
   * The method used to crop the video.
   * 
   * *   **border**: automatically detects and removes borders.
   * *   Value in the width:height:left:top format: crops the video based on custom settings.**** Example: 1280:800:0:140.
   * 
   * @example
   * 1
   */
  qscale?: string;
  /**
   * @remarks
   * The maximum number of frames between two keyframes. Default value: **250**.
   * 
   * @example
   * false
   */
  remove?: string;
  /**
   * @remarks
   * The general transcoding configurations.
   * 
   * @example
   * 1
   */
  resoPriority?: string;
  /**
   * @remarks
   * The policy of resolution adjustment.
   * 
   * @example
   * interlaced
   */
  scanMode?: string;
  /**
   * @remarks
   * The frame rate.
   * 
   * *   A value of 60 is returned if the frame rate of the input video exceeds 60.
   * *   Default value: the frame rate of the input video.
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
      bitrateBnd: UpdateTemplateResponseBodyTemplateVideoBitrateBnd,
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
      narrowBand: UpdateTemplateResponseBodyTemplateVideoNarrowBand,
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

export class UpdateTemplateResponseBodyTemplate extends $dara.Model {
  /**
   * @remarks
   * The audio codec settings.
   */
  audio?: UpdateTemplateResponseBodyTemplateAudio;
  /**
   * @remarks
   * The container format.
   */
  container?: UpdateTemplateResponseBodyTemplateContainer;
  /**
   * @remarks
   * The container configurations.
   * 
   * @example
   * 16f01ad6175e4230ac42bb5182cd****
   */
  id?: string;
  /**
   * @remarks
   * The transmuxing configurations for WebP.
   */
  muxConfig?: UpdateTemplateResponseBodyTemplateMuxConfig;
  /**
   * @remarks
   * The audio codec configurations.
   * 
   * @example
   * MPS-example
   */
  name?: string;
  /**
   * @remarks
   * The transmuxing configurations.
   * 
   * @example
   * Normal
   */
  state?: string;
  /**
   * @remarks
   * Indicates whether the audio bitrate is checked. If the bitrate of the output audio is greater than the bitrate of the input audio, the bitrate of the input audio is retained after transcoding. In this case, the specified audio bitrate does not take effect. This parameter has a lower priority than the IsCheckAudioBitrateFail parameter. Valid values:
   * 
   * *   **true**: The audio bitrate is checked.
   * 
   * *   **false**: The audio bitrate is not checked.
   * 
   * *   Default value:
   * 
   *     *   If the parameter is left empty and the codec of the output audio is different from that of the input audio, the default value is false.
   *     *   If the parameter is left empty and the codec of the output audio is the same as that of the input audio, the default value is true.
   */
  transConfig?: UpdateTemplateResponseBodyTemplateTransConfig;
  /**
   * @remarks
   * The video codec configurations.
   */
  video?: UpdateTemplateResponseBodyTemplateVideo;
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
      audio: UpdateTemplateResponseBodyTemplateAudio,
      container: UpdateTemplateResponseBodyTemplateContainer,
      id: 'string',
      muxConfig: UpdateTemplateResponseBodyTemplateMuxConfig,
      name: 'string',
      state: 'string',
      transConfig: UpdateTemplateResponseBodyTemplateTransConfig,
      video: UpdateTemplateResponseBodyTemplateVideo,
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

export class UpdateTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the transcoding template.
   * 
   * @example
   * 5E4FB22E-B9EA-4E24-8FFC-B407EA71QW21
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the transcoding template.
   */
  template?: UpdateTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      template: UpdateTemplateResponseBodyTemplate,
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

