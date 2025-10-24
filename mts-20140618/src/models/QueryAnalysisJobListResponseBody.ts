// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigPropertiesControlCrop extends $dara.Model {
  /**
   * @remarks
   * The height of the video image after the margins are cropped out.
   * 
   * >  This parameter is invalid if the Mode parameter is set to Auto or None.
   * 
   * @example
   * 8
   */
  height?: string;
  /**
   * @remarks
   * The left margin to be cropped out.
   * 
   * >  This parameter is invalid if the Mode parameter is set to Auto or None.
   * 
   * @example
   * 8
   */
  left?: string;
  /**
   * @remarks
   * The cropping mode. Valid values:
   * 
   * *   **Auto**: Cropping was automatically run.
   * *   **Force**: Cropping was forced to run.
   * *   **None**: Cropping was forced not to run.
   * *   This parameter is required if the value of the Crop parameter is not an empty JSON {}.
   * 
   * @example
   * Auto
   */
  mode?: string;
  /**
   * @remarks
   * The top margin to be cropped out.
   * 
   * >  This parameter is invalid if the Mode parameter is set to Auto or None.
   * 
   * @example
   * 8
   */
  top?: string;
  /**
   * @remarks
   * The width of the video image after the margins are cropped out.
   * 
   * >  This parameter is invalid if the Mode parameter is set to Auto or None.
   * 
   * @example
   * 8
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      mode: 'Mode',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'string',
      left: 'string',
      mode: 'string',
      top: 'string',
      width: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigPropertiesControl extends $dara.Model {
  /**
   * @remarks
   * The cropping configuration of the video image.
   */
  crop?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigPropertiesControlCrop;
  /**
   * @remarks
   * Specifies whether deinterlacing was forced to run. Valid values:
   * 
   * *   **Auto**: Deinterlacing was automatically run.
   * *   **Force**: Deinterlacing was forced to run.
   * *   **None**: Deinterlacing was forced not to run.
   * 
   * @example
   * Auto
   */
  deinterlace?: string;
  static names(): { [key: string]: string } {
    return {
      crop: 'Crop',
      deinterlace: 'Deinterlace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crop: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigPropertiesControlCrop,
      deinterlace: 'string',
    };
  }

  validate() {
    if(this.crop && typeof (this.crop as any).validate === 'function') {
      (this.crop as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigQualityControl extends $dara.Model {
  /**
   * @remarks
   * The playback mode. Valid values:
   * 
   * *   **network**: online playback.
   * *   **local**: playback on on-premises devices.
   * *   Default value: **network**.
   * 
   * @example
   * network
   */
  methodStreaming?: string;
  /**
   * @remarks
   * The quality level of the job output. Default value: **25**.
   * 
   * @example
   * 25
   */
  rateQuality?: string;
  static names(): { [key: string]: string } {
    return {
      methodStreaming: 'MethodStreaming',
      rateQuality: 'RateQuality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      methodStreaming: 'string',
      rateQuality: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfig extends $dara.Model {
  /**
   * @remarks
   * The control on the attributes of the job output.
   */
  propertiesControl?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigPropertiesControl;
  /**
   * @remarks
   * The quality control on the job output.
   */
  qualityControl?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigQualityControl;
  static names(): { [key: string]: string } {
    return {
      propertiesControl: 'PropertiesControl',
      qualityControl: 'QualityControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertiesControl: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigPropertiesControl,
      qualityControl: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigQualityControl,
    };
  }

  validate() {
    if(this.propertiesControl && typeof (this.propertiesControl as any).validate === 'function') {
      (this.propertiesControl as any).validate();
    }
    if(this.qualityControl && typeof (this.qualityControl as any).validate === 'function') {
      (this.qualityControl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobInputFile extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which the input file is stored.
   * 
   * @example
   * example-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The region in which OSS resides.
   * 
   * @example
   * oss-cn-hangzhou
   */
  location?: string;
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) object that is used as the input file.
   * 
   * @example
   * example.flv
   */
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobMNSMessageResult extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the job failed. This parameter is not returned if the job was successful.
   * 
   * @example
   * InvalidParameter.ResourceNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the job failed. This parameter is not returned if the job was successful.
   * 
   * @example
   * The resource operated \\"PipelineId\\" cannot be found
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the message returned if the job was successful. This parameter is not returned if the job failed.
   * 
   * @example
   * 3ca84a39a9024f19853b21be9cf9****
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      messageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateAudio extends $dara.Model {
  /**
   * @remarks
   * The audio bitrate of the output file.
   * 
   * *   Valid values: **8 to 1000**.
   * *   Unit: Kbit/s.
   * *   Default value: **128**.
   * 
   * @example
   * 128
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
   * The audio codec. Default value: **aac**. Valid values:
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
   * The codec profile of the audio. Valid values when the **Codec** parameter is set to **aac**:
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
   * The level of quality control on the audio.
   * 
   * @example
   * 15
   */
  qscale?: string;
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
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      qscale: 'Qscale',
      samplerate: 'Samplerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
      qscale: 'string',
      samplerate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateContainer extends $dara.Model {
  /**
   * @remarks
   * The container format.
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

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfigGif extends $dara.Model {
  /**
   * @remarks
   * The interval between two consecutive loops for the GIF format. Unit: 0.01 second. For example, a value of 500 indicates 5 seconds.
   * 
   * @example
   * 0
   */
  finalDelay?: string;
  /**
   * @remarks
   * The number of loops for the GIF or WebP format. Default value: 0.
   * 
   * @example
   * 0
   */
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      finalDelay: 'FinalDelay',
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finalDelay: 'string',
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

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfigSegment extends $dara.Model {
  /**
   * @remarks
   * The segment length. Unit: seconds.
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

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The transmuxing configurations for the GIF format.
   */
  gif?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfigGif;
  /**
   * @remarks
   * The segment configurations.
   */
  segment?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfigSegment;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfigGif,
      segment: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfigSegment,
    };
  }

  validate() {
    if(this.gif && typeof (this.gif as any).validate === 'function') {
      (this.gif as any).validate();
    }
    if(this.segment && typeof (this.segment as any).validate === 'function') {
      (this.segment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateTransConfig extends $dara.Model {
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
      transMode: 'TransMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateVideoBitrateBnd extends $dara.Model {
  /**
   * @remarks
   * The upper limit of the total bitrate. Unit: Kbit/s.
   * 
   * @example
   * 1500
   */
  max?: string;
  /**
   * @remarks
   * The lower limit of the total bitrate. Unit: Kbit/s.
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

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateVideo extends $dara.Model {
  /**
   * @remarks
   * The average bitrate of the video. Unit: Kbit/s.
   * 
   * @example
   * 1000
   */
  bitrate?: string;
  /**
   * @remarks
   * The average bitrate range of the video.
   */
  bitrateBnd?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateVideoBitrateBnd;
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
   * The codec. Valid values: H.264 and H.265. Default value: **H.264**.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The constant rate factor.
   * 
   * *   Default value when the the Codec parameter is set to H.264: **23**, default value when the the Codec parameter is set to H.265: **26**.
   * *   If this parameter is specified, the value of the Bitrate parameter becomes invalid.
   * 
   * @example
   * 26
   */
  crf?: string;
  /**
   * @remarks
   * The strength of the independent noise reduction algorithm.
   * 
   * @example
   * 5
   */
  degrain?: string;
  /**
   * @remarks
   * The frame rate of the video.
   * 
   * *   The value is 60 if the frame rate of the input file exceeds 60.
   * *   Default value: **the frame rate of the input video**.
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
   * 250
   */
  gop?: string;
  /**
   * @remarks
   * The height of the video.
   * 
   * *   Unit: pixel.
   * *   Default value: **the height of the input video**.
   * 
   * @example
   * 720
   */
  height?: string;
  /**
   * @remarks
   * The maximum bitrate of the video.
   * 
   * *   Valid values: **10 to 50000**.
   * *   Unit: Kbit/s.
   * 
   * @example
   * 2000
   */
  maxrate?: string;
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
   * The codec profile. Valid values:
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
   * The level of quality control on the video.
   * 
   * @example
   * 15
   */
  qscale?: string;
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
   * 1280
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      bitrateBnd: 'BitrateBnd',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      degrain: 'Degrain',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      maxrate: 'Maxrate',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      qscale: 'Qscale',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      bitrateBnd: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateVideoBitrateBnd,
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      degrain: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      maxrate: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      qscale: 'string',
      scanMode: 'string',
      width: 'string',
    };
  }

  validate() {
    if(this.bitrateBnd && typeof (this.bitrateBnd as any).validate === 'function') {
      (this.bitrateBnd as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplate extends $dara.Model {
  /**
   * @remarks
   * The audio codec configurations.
   */
  audio?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateAudio;
  /**
   * @remarks
   * The container format configurations.
   */
  container?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateContainer;
  /**
   * @remarks
   * The transcoding template ID.
   * 
   * @example
   * S00000000-00****
   */
  id?: string;
  /**
   * @remarks
   * The transmuxing configurations.
   */
  muxConfig?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfig;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * FLV-UD
   */
  name?: string;
  /**
   * @remarks
   * The state of the template. Valid values:
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
  transConfig?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateTransConfig;
  /**
   * @remarks
   * The video codec configurations.
   */
  video?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateVideo;
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
      audio: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateAudio,
      container: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateContainer,
      id: 'string',
      muxConfig: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfig,
      name: 'string',
      state: 'string',
      transConfig: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateTransConfig,
      video: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateVideo,
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

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateList extends $dara.Model {
  template?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplate },
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

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJob extends $dara.Model {
  /**
   * @remarks
   * The job configurations.
   */
  analysisConfig?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfig;
  /**
   * @remarks
   * The error code returned if the job fails.
   * 
   * @example
   * InvalidParameter.ResourceNotFound
   */
  code?: string;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2014-01-10T12:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the template analysis job.
   * 
   * @example
   * 57f6aa3f84824309bcba67231b406****
   */
  id?: string;
  /**
   * @remarks
   * The information about the job input.
   */
  inputFile?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobInputFile;
  /**
   * @remarks
   * The message sent by Message Service (MNS) to notify users of the job result.
   */
  MNSMessageResult?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobMNSMessageResult;
  /**
   * @remarks
   * The error message returned if the job failed.
   * 
   * @example
   * The resource operated \\"PipelineId\\" cannot be found
   */
  message?: string;
  /**
   * @remarks
   * The transcoding progress.
   * 
   * @example
   * 86
   */
  percent?: number;
  /**
   * @remarks
   * The ID of the MPS queue to which the job was submitted.
   * 
   * @example
   * bb558c1cc25b45309aab5be44d19****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The priority of the job in the ApsaraVideo Media Processing (MPS) queue to which the job was submitted.
   * 
   * *   Valid values: **1 to 10**. The value 10 indicates the highest priority.
   * *   Default value: **10**.
   * 
   * @example
   * 8
   */
  priority?: string;
  /**
   * @remarks
   * The job status.
   * 
   * *   **Submitted**: The job was submitted.
   * *   **Analyzing**: The job is in progress.
   * *   **Success**: The job was successful.
   * *   **Fail**: The job failed.
   * 
   * @example
   * Success
   */
  state?: string;
  /**
   * @remarks
   * The matched preset templates.
   */
  templateList?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateList;
  /**
   * @remarks
   * The custom data.
   * 
   * @example
   * testid-001
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      analysisConfig: 'AnalysisConfig',
      code: 'Code',
      creationTime: 'CreationTime',
      id: 'Id',
      inputFile: 'InputFile',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      percent: 'Percent',
      pipelineId: 'PipelineId',
      priority: 'Priority',
      state: 'State',
      templateList: 'TemplateList',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisConfig: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfig,
      code: 'string',
      creationTime: 'string',
      id: 'string',
      inputFile: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobInputFile,
      MNSMessageResult: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobMNSMessageResult,
      message: 'string',
      percent: 'number',
      pipelineId: 'string',
      priority: 'string',
      state: 'string',
      templateList: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateList,
      userData: 'string',
    };
  }

  validate() {
    if(this.analysisConfig && typeof (this.analysisConfig as any).validate === 'function') {
      (this.analysisConfig as any).validate();
    }
    if(this.inputFile && typeof (this.inputFile as any).validate === 'function') {
      (this.inputFile as any).validate();
    }
    if(this.MNSMessageResult && typeof (this.MNSMessageResult as any).validate === 'function') {
      (this.MNSMessageResult as any).validate();
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

export class QueryAnalysisJobListResponseBodyAnalysisJobList extends $dara.Model {
  analysisJob?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJob[];
  static names(): { [key: string]: string } {
    return {
      analysisJob: 'AnalysisJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisJob: { 'type': 'array', 'itemType': QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJob },
    };
  }

  validate() {
    if(Array.isArray(this.analysisJob)) {
      $dara.Model.validateArray(this.analysisJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyNonExistAnalysisJobIds extends $dara.Model {
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

export class QueryAnalysisJobListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of template analysis jobs.
   */
  analysisJobList?: QueryAnalysisJobListResponseBodyAnalysisJobList;
  /**
   * @remarks
   * The message sent by Message Service (MNS) to notify the user of the job result.
   */
  nonExistAnalysisJobIds?: QueryAnalysisJobListResponseBodyNonExistAnalysisJobIds;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   **Submitted**: The job has been submitted.
   * *   **Analyzing**: The job is being run.
   * *   **Success**: The job is successful.
   * *   **Fail**: The job fails.
   * 
   * @example
   * 5CA6E020-4102-4FFF-AA56-5ED7ECD811A1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisJobList: 'AnalysisJobList',
      nonExistAnalysisJobIds: 'NonExistAnalysisJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisJobList: QueryAnalysisJobListResponseBodyAnalysisJobList,
      nonExistAnalysisJobIds: QueryAnalysisJobListResponseBodyNonExistAnalysisJobIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.analysisJobList && typeof (this.analysisJobList as any).validate === 'function') {
      (this.analysisJobList as any).validate();
    }
    if(this.nonExistAnalysisJobIds && typeof (this.nonExistAnalysisJobIds as any).validate === 'function') {
      (this.nonExistAnalysisJobIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

