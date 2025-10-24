// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTemplateListResponseBodyNonExistTids extends $dara.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.string)) {
      $dara.Model.validateArray(this.string);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateListResponseBodyTemplateListTemplateAudioVolume extends $dara.Model {
  /**
   * @remarks
   * The output volume.
   * 
   * *   This parameter takes effect only if the value of Method is dynamic.
   * *   Unit: dB.
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
   * *   Unit: dB.
   * *   Valid values: less than or equal to 20.
   * *   Default value: -20.
   * 
   * @example
   * -20
   */
  level?: string;
  /**
   * @remarks
   * The range of the volume relative to the output volume.
   * 
   * *   This parameter takes effect only if the value of Method is dynamic.
   * *   Unit: dB.
   * *   Valid values: [1,20].
   * *   Default value: 8.
   * 
   * @example
   * 8
   */
  loudnessRangeTarget?: string;
  /**
   * @remarks
   * The method that is used to adjust the volume. Valid values:
   * 
   * *   **auto**
   * *   **dynamic**
   * *   **linear**
   * *   Default value: dynamic.
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
   * *   Unit: dB.
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

export class QueryTemplateListResponseBodyTemplateListTemplateAudio extends $dara.Model {
  /**
   * @remarks
   * The audio bitrate of the output file.
   * 
   * *   Valid values: **[8,1000]**.
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
   * The codec profile of the audio. Valid values when the value of Codec is aac:
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
   * The strength of the independent denoising algorithm.
   * 
   * @example
   * 1
   */
  qscale?: string;
  /**
   * @remarks
   * Indicates whether the audio stream is deleted. Valid values:
   * 
   * *   **true**
   * *   **false**
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  remove?: string;
  /**
   * @remarks
   * The sampling rate.
   * 
   * *   Unit: Hz
   * *   Default value: **44100**.
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  /**
   * @remarks
   * The volume control configurations.
   */
  volume?: QueryTemplateListResponseBodyTemplateListTemplateAudioVolume;
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
      volume: QueryTemplateListResponseBodyTemplateListTemplateAudioVolume,
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

export class QueryTemplateListResponseBodyTemplateListTemplateContainer extends $dara.Model {
  /**
   * @remarks
   * The format of the container. Valid values: flv, mp4, ts, m3u8, gif, mp3, ogg, and flac.
   * 
   * @example
   * flv
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

export class QueryTemplateListResponseBodyTemplateListTemplateMuxConfigGif extends $dara.Model {
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
   * The duration for which the final frame is paused.
   * 
   * @example
   * 0
   */
  finalDelay?: string;
  /**
   * @remarks
   * Indicates whether a custom palette is used.
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

export class QueryTemplateListResponseBodyTemplateListTemplateMuxConfigSegment extends $dara.Model {
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

export class QueryTemplateListResponseBodyTemplateListTemplateMuxConfigWebp extends $dara.Model {
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

export class QueryTemplateListResponseBodyTemplateListTemplateMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The transmuxing configurations for GIF.
   */
  gif?: QueryTemplateListResponseBodyTemplateListTemplateMuxConfigGif;
  /**
   * @remarks
   * The segment configurations.
   */
  segment?: QueryTemplateListResponseBodyTemplateListTemplateMuxConfigSegment;
  /**
   * @remarks
   * The transmuxing configurations for WebP.
   */
  webp?: QueryTemplateListResponseBodyTemplateListTemplateMuxConfigWebp;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
      webp: 'Webp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: QueryTemplateListResponseBodyTemplateListTemplateMuxConfigGif,
      segment: QueryTemplateListResponseBodyTemplateListTemplateMuxConfigSegment,
      webp: QueryTemplateListResponseBodyTemplateListTemplateMuxConfigWebp,
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

export class QueryTemplateListResponseBodyTemplateListTemplateTransConfig extends $dara.Model {
  /**
   * @remarks
   * The method of resolution adjustment. Default value: **none**. Valid values:
   * 
   * *   rescale
   * *   crop
   * *   none
   * 
   * @example
   * none
   */
  adjDarMethod?: string;
  /**
   * @remarks
   * Indicates whether the audio bitrate is checked. If the bitrate of the output audio is higher than that of the input audio, the input bitrate is retained and the specified audio bitrate does not take effect. This parameter has a lower priority than IsCheckAudioBitrateFail. Valid values:
   * 
   * *   **true**
   * 
   * *   **false**
   * 
   * *   Default value:
   * 
   *     *   If this parameter is not specified and the codec of the output audio is different from that of the input audio, the default value is false.
   *     *   If this parameter is not specified and the codec of the output audio is the same as that of the input audio, the default value is true.
   * 
   * @example
   * false
   */
  isCheckAudioBitrate?: string;
  /**
   * @remarks
   * Indicates whether audio bitrate check errors are allowed. This parameter has a greater priority than IsCheckAudioBitrate. Valid values:
   * 
   * *   **true**: If the audio bitrate check fails, the input file is not transcoded.
   * *   **false**: The audio bitrate is not checked.
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  isCheckAudioBitrateFail?: string;
  /**
   * @remarks
   * Indicates whether the resolution is checked. If the output resolution is higher than the input resolution based on the width or height, the input resolution is retained. Valid values:
   * 
   * *   **true**
   * *   **false**
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  isCheckReso?: string;
  /**
   * @remarks
   * Indicates whether the resolution is checked. If the output resolution is higher than the input resolution based on the width or height, a transcoding failure is returned. Valid values:
   * 
   * *   **true**
   * *   **false**
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  isCheckResoFail?: string;
  /**
   * @remarks
   * Indicates whether the video bitrate is checked. If the bitrate of the output video is higher than that of the input video, the input bitrate is retained. Valid values:
   * 
   * *   **true**
   * *   **false**
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  isCheckVideoBitrate?: string;
  /**
   * @remarks
   * Indicates whether video bitrate check errors are allowed. This parameter has a higher priority than IsCheckVideoBitrate. Valid values:
   * 
   * *   **true**: If the video bitrate check fails, the input file is not transcoded.
   * *   **false**: The video bitrate is not checked.
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  isCheckVideoBitrateFail?: string;
  /**
   * @remarks
   * The transcoding mode. Default value: **onepass**. Valid values:
   * 
   * *   **onepass**
   * *   **twopass**
   * *   **CBR**
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

export class QueryTemplateListResponseBodyTemplateListTemplateVideoBitrateBnd extends $dara.Model {
  /**
   * @remarks
   * The upper limit of the total bitrate. Unit: Kbit/s.
   * 
   * @example
   * 100
   */
  max?: string;
  /**
   * @remarks
   * The lower limit of the total bitrate. Unit: Kbit/s.
   * 
   * @example
   * 500
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

export class QueryTemplateListResponseBodyTemplateListTemplateVideoNarrowBand extends $dara.Model {
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

export class QueryTemplateListResponseBodyTemplateListTemplateVideo extends $dara.Model {
  /**
   * @remarks
   * The average bitrate of the video. Unit: Kbit/s.
   * 
   * @example
   * 200
   */
  bitrate?: string;
  /**
   * @remarks
   * The average bitrate range of the video.
   */
  bitrateBnd?: QueryTemplateListResponseBodyTemplateListTemplateVideoBitrateBnd;
  /**
   * @remarks
   * The buffer size.
   * 
   * *   Unit: KB.
   * *   Default value: **6000**.
   * 
   * @example
   * 6000
   */
  bufsize?: string;
  /**
   * @remarks
   * The codec. Default value: **H.264**.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The constant rate factor.
   * 
   * *   Default value when the encoding format is H.264: **23**. Default value when the encoding format is H.265: **26**.
   * *   If this parameter is set, the value of Bitrate becomes invalid.
   * 
   * @example
   * 15
   */
  crf?: string;
  /**
   * @remarks
   * The method of video cropping. Valid values:
   * 
   * *   **border**: automatically detects and removes black bars.
   * *   **Value in the width:height:left:top format**: crops the video based on custom settings. Format: width:height:left:top. Example: 1280:800:0:140.
   * 
   * @example
   * border
   */
  crop?: string;
  /**
   * @remarks
   * The level of video quality control.
   * 
   * @example
   * 10
   */
  degrain?: string;
  /**
   * @remarks
   * The frame rate.
   * 
   * *   The value is 60 if the frame rate of the input file exceeds 60.
   * *   Default value: **the frame rate of the input file**.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The maximum number of frames between two keyframes. Default value: **250**.
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
   * The height of the video.
   * 
   * *   Unit: pixel.
   * *   Default value: **the height of the input video**.
   * 
   * @example
   * 800
   */
  height?: string;
  /**
   * @remarks
   * Indicates whether the auto-rotate screen feature is enabled.
   * 
   * *   If this feature is enabled, the width of the output video corresponds to the long side of the input video, which is the height of the input video in portrait mode. The height of the output video corresponds to the short side of the input video, which is the width of the input video in portrait mode. Valid values:
   * *   **true**
   * *   **false**
   * *   Default value: **false**.
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
  narrowBand?: QueryTemplateListResponseBodyTemplateListTemplateVideoNarrowBand;
  /**
   * @remarks
   * The black bars that are added to the video. Format: width:height:left:top. Example: 1280:800:0:140.
   * 
   * @example
   * 1280:800:0:140
   */
  pad?: string;
  /**
   * @remarks
   * The pixel format of the video. Valid values: standard pixel formats such as yuv420p and yuvj420p.
   * 
   * @example
   * yuv420p
   */
  pixFmt?: string;
  /**
   * @remarks
   * The preset video algorithm. Valid values: veryfast, fast, medium, slow, and slower. Default value: **medium**.
   * 
   * @example
   * medium
   */
  preset?: string;
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
   * high
   */
  profile?: string;
  /**
   * @remarks
   * The strength of the independent denoising algorithm.
   * 
   * @example
   * 1
   */
  qscale?: string;
  /**
   * @remarks
   * Indicates whether the video stream is deleted. Valid values:
   * 
   * *   **true**
   * *   **false**
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  remove?: string;
  /**
   * @remarks
   * The policy of resolution adjustment. Valid values: cropFirst, widthFirst, and heightFirst.
   * 
   * @example
   * heightFirst
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
   * *   Unit: pixel.
   * *   Default value: **the width of the input video**.
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
      bitrateBnd: QueryTemplateListResponseBodyTemplateListTemplateVideoBitrateBnd,
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
      narrowBand: QueryTemplateListResponseBodyTemplateListTemplateVideoNarrowBand,
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

export class QueryTemplateListResponseBodyTemplateListTemplate extends $dara.Model {
  /**
   * @remarks
   * The audio codec configurations.
   */
  audio?: QueryTemplateListResponseBodyTemplateListTemplateAudio;
  /**
   * @remarks
   * The container format configurations.
   */
  container?: QueryTemplateListResponseBodyTemplateListTemplateContainer;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2021-03-04T06:44:43Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The transcoding template ID.
   * 
   * @example
   * 16f01ad6175e4230ac42bb5182cd****
   */
  id?: string;
  /**
   * @remarks
   * The transmuxing configurations.
   */
  muxConfig?: QueryTemplateListResponseBodyTemplateListTemplateMuxConfig;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * MPS-example
   */
  name?: string;
  /**
   * @remarks
   * The status of the template. Valid values:
   * 
   * *   **Normal**
   * *   **Deleted**
   * 
   * @example
   * Normal
   */
  state?: string;
  /**
   * @remarks
   * The general transcoding configurations.
   */
  transConfig?: QueryTemplateListResponseBodyTemplateListTemplateTransConfig;
  /**
   * @remarks
   * The video codec configurations.
   */
  video?: QueryTemplateListResponseBodyTemplateListTemplateVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      creationTime: 'CreationTime',
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
      audio: QueryTemplateListResponseBodyTemplateListTemplateAudio,
      container: QueryTemplateListResponseBodyTemplateListTemplateContainer,
      creationTime: 'string',
      id: 'string',
      muxConfig: QueryTemplateListResponseBodyTemplateListTemplateMuxConfig,
      name: 'string',
      state: 'string',
      transConfig: QueryTemplateListResponseBodyTemplateListTemplateTransConfig,
      video: QueryTemplateListResponseBodyTemplateListTemplateVideo,
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

export class QueryTemplateListResponseBodyTemplateList extends $dara.Model {
  template?: QueryTemplateListResponseBodyTemplateListTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': QueryTemplateListResponseBodyTemplateListTemplate },
    };
  }

  validate() {
    if(Array.isArray(this.template)) {
      $dara.Model.validateArray(this.template);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the templates that do not exist. This parameter is not returned if all specified transcoding templates are found.
   */
  nonExistTids?: QueryTemplateListResponseBodyNonExistTids;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BC860F04-778A-472F-AB39-E1BF329C1EA8
   */
  requestId?: string;
  /**
   * @remarks
   * The transcoding templates.
   */
  templateList?: QueryTemplateListResponseBodyTemplateList;
  static names(): { [key: string]: string } {
    return {
      nonExistTids: 'NonExistTids',
      requestId: 'RequestId',
      templateList: 'TemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistTids: QueryTemplateListResponseBodyNonExistTids,
      requestId: 'string',
      templateList: QueryTemplateListResponseBodyTemplateList,
    };
  }

  validate() {
    if(this.nonExistTids && typeof (this.nonExistTids as any).validate === 'function') {
      (this.nonExistTids as any).validate();
    }
    if(this.templateList && typeof (this.templateList as any).validate === 'function') {
      (this.templateList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

