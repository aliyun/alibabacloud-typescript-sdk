// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigPropertiesControlCrop extends $dara.Model {
  /**
   * @remarks
   * The height of the video after the margins were cropped out.
   * 
   * > This parameter is invalid if the **Mode** parameter is set to Auto or None.
   * 
   * @example
   * 8
   */
  height?: string;
  /**
   * @remarks
   * The left margin that was cropped out.
   * 
   * > This parameter is invalid if the **Mode** parameter is set to Auto or None.
   * 
   * @example
   * 8
   */
  left?: string;
  /**
   * @remarks
   * The cropping mode. Valid values:
   * 
   * *   **Auto**: Cropping was automatically run. This is the default value.
   * *   **Force**: Cropping was forced to run.
   * *   **None**: Cropping was forced not to run.
   * 
   * @example
   * Auto
   */
  mode?: string;
  /**
   * @remarks
   * The top margin that was cropped out.
   * 
   * > This parameter is invalid if the **Mode** parameter is set to Auto or None.
   * 
   * @example
   * 8
   */
  top?: string;
  /**
   * @remarks
   * The width of the video after the margins were cropped out.
   * 
   * > This parameter is invalid if the **Mode** parameter is set to Auto or None.
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

export class SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigPropertiesControl extends $dara.Model {
  /**
   * @remarks
   * The cropping configurations of video images.
   */
  crop?: SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigPropertiesControlCrop;
  /**
   * @remarks
   * Indicates whether deinterlacing was forced to run. Valid values:
   * 
   * *   **Auto**: Deinterlacing was automatically run.
   * *   **Force**: Deinterlacing was forced to run.
   * *   **None**: Deinterlacing was forced not to run.
   * 
   * @example
   * Force
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
      crop: SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigPropertiesControlCrop,
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

export class SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigQualityControl extends $dara.Model {
  /**
   * @remarks
   * The playback mode. Valid values:
   * 
   * *   **network**: online playback
   * *   **local**: playback on local devices
   * *   Default value: **network**.
   * 
   * @example
   * network
   */
  methodStreaming?: string;
  /**
   * @remarks
   * The quality level of the output file.
   * 
   * @example
   * 50
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

export class SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfig extends $dara.Model {
  /**
   * @remarks
   * The control on the attributes of the job output.
   */
  propertiesControl?: SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigPropertiesControl;
  /**
   * @remarks
   * The quality control on the job output.
   */
  qualityControl?: SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigQualityControl;
  static names(): { [key: string]: string } {
    return {
      propertiesControl: 'PropertiesControl',
      qualityControl: 'QualityControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertiesControl: SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigPropertiesControl,
      qualityControl: SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigQualityControl,
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

export class SubmitAnalysisJobResponseBodyAnalysisJobInputFile extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * example-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The ID of the OSS region.
   * 
   * @example
   * oss-cn-hangzhou
   */
  location?: string;
  /**
   * @remarks
   * The name of the OSS object that is used as the input file.
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

export class SubmitAnalysisJobResponseBodyAnalysisJobMNSMessageResult extends $dara.Model {
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

export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateAudio extends $dara.Model {
  /**
   * @remarks
   * The audio bitrate of the output file.
   * 
   * *   Unit: Kbit/s.
   * *   Default value: **128**.
   * 
   * @example
   * 8
   */
  bitrate?: string;
  /**
   * @remarks
   * The number of sound channels. Default value: **2**.
   * 
   * @example
   * 1
   */
  channels?: string;
  /**
   * @remarks
   * The audio codec format. Default value: **acc**.
   * 
   * @example
   * mp3
   */
  codec?: string;
  /**
   * @remarks
   * The codec profile of the audio. Valid values if the **Codec** parameter is set to **aac**: aac_low, aac_he, aac_he_v2, aac_ld, and aac_eld.
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
   * 10
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
   * 32000
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

export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateContainer extends $dara.Model {
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

export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfigGif extends $dara.Model {
  /**
   * @remarks
   * The interval between two consecutive loops for the GIF format. Unit: 0.01s. For example, a value of 500 indicates 5 seconds.
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

export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfigSegment extends $dara.Model {
  /**
   * @remarks
   * The length of the segment. Unit: seconds.
   * 
   * @example
   * 60
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

export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The transmuxing configurations for the GIF format.
   */
  gif?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfigGif;
  /**
   * @remarks
   * The segment configurations.
   */
  segment?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfigSegment;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfigGif,
      segment: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfigSegment,
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

export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateTransConfig extends $dara.Model {
  /**
   * @remarks
   * The transcoding mode. Valid values: onepass, twopass, and CBR. Default value: **onepass**.
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

export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateVideoBitrateBnd extends $dara.Model {
  /**
   * @remarks
   * The upper limit of the total bitrate. Unit: Kbit/s.
   * 
   * @example
   * 20
   */
  max?: string;
  /**
   * @remarks
   * The lower limit of the total bitrate. Unit: Kbit/s.
   * 
   * @example
   * 10
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

export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateVideo extends $dara.Model {
  /**
   * @remarks
   * The average bitrate of the video. Unit: Kbit/s.
   * 
   * @example
   * 10
   */
  bitrate?: string;
  /**
   * @remarks
   * The average bitrate range of the video.
   */
  bitrateBnd?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateVideoBitrateBnd;
  /**
   * @remarks
   * The size of the buffer.
   * 
   * *   Unit: KB.
   * *   Default value: **6000**.
   * 
   * @example
   * 5000
   */
  bufsize?: string;
  /**
   * @remarks
   * The video codec. Default value: **H.264**.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The constant rate factor.
   * 
   * *   Default value if the Codec parameter is set to H.264: **23**. Default value if the Codec parameter is set to H.265: **26**.
   * *   If this parameter is returned, the setting of the Bitrate parameter is invalid.
   * 
   * @example
   * 27
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
   * The frame rate.
   * 
   * *   The value is 60 if the frame rate of the input video exceeds 60.
   * *   Default value: the frame rate of the input video.
   * 
   * @example
   * 60
   */
  fps?: string;
  /**
   * @remarks
   * The maximum number of frames between two keyframes. Default value: **250**.
   * 
   * @example
   * 1
   */
  gop?: string;
  /**
   * @remarks
   * The height of the video.
   * 
   * *   Unit: pixel.
   * *   Default value: the height of the input video.
   * 
   * @example
   * 1880
   */
  height?: string;
  /**
   * @remarks
   * The maximum bitrate of the video. Unit: Kbit/s.
   * 
   * @example
   * 10
   */
  maxrate?: string;
  /**
   * @remarks
   * The pixel format for video color encoding. Valid values: standard pixel formats such as yuv420p and yuvj420p.
   * 
   * @example
   * yuvj420p
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
   * baseline
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
   * progressive
   */
  scanMode?: string;
  /**
   * @remarks
   * The width of the video.
   * 
   * *   Unit: pixel.
   * *   Default value: the width of the input video.
   * 
   * @example
   * 1990
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
      bitrateBnd: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateVideoBitrateBnd,
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

export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplate extends $dara.Model {
  /**
   * @remarks
   * The audio codec configurations.
   */
  audio?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateAudio;
  /**
   * @remarks
   * The container format configurations.
   */
  container?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateContainer;
  /**
   * @remarks
   * The ID of the transcoding template.
   * 
   * @example
   * S00000000-00****
   */
  id?: string;
  /**
   * @remarks
   * The transmuxing configurations.
   */
  muxConfig?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfig;
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
   * The status of the template.
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
   * The general transcoding configurations.
   */
  transConfig?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateTransConfig;
  /**
   * @remarks
   * The video codec configurations.
   */
  video?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateVideo;
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
      audio: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateAudio,
      container: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateContainer,
      id: 'string',
      muxConfig: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfig,
      name: 'string',
      state: 'string',
      transConfig: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateTransConfig,
      video: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateVideo,
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

export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateList extends $dara.Model {
  template?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplate },
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

export class SubmitAnalysisJobResponseBodyAnalysisJob extends $dara.Model {
  /**
   * @remarks
   * The job configurations.
   */
  analysisConfig?: SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfig;
  /**
   * @remarks
   * The error code returned if the job failed. This parameter is not returned if the job was successful.
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
   * 57f6aa3f84824309bcba67231b40****
   */
  id?: string;
  /**
   * @remarks
   * The information about the job input.
   */
  inputFile?: SubmitAnalysisJobResponseBodyAnalysisJobInputFile;
  /**
   * @remarks
   * The message sent by MNS to notify users of the job result.
   */
  MNSMessageResult?: SubmitAnalysisJobResponseBodyAnalysisJobMNSMessageResult;
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
   * 100
   */
  percent?: number;
  /**
   * @remarks
   * The ID of the MPS queue to which the analysis job was submitted.
   * 
   * @example
   * bb558c1cc25b45309aab5be44d19****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The priority of the job in the MPS queue to which the job was submitted.
   * 
   * *   Valid values: **1 to 10**. A value of 10 indicates the highest priority.
   * *   Default value: **10**.
   * 
   * @example
   * 10
   */
  priority?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   **Submitted**: The job is submitted.
   * *   **Analyzing**: The job is being run.
   * *   **Success**: The job is successful.
   * *   **Fail**: The job fails.
   * 
   * @example
   * Success
   */
  state?: string;
  /**
   * @remarks
   * The matched preset templates.
   */
  templateList?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateList;
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
      analysisConfig: SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfig,
      code: 'string',
      creationTime: 'string',
      id: 'string',
      inputFile: SubmitAnalysisJobResponseBodyAnalysisJobInputFile,
      MNSMessageResult: SubmitAnalysisJobResponseBodyAnalysisJobMNSMessageResult,
      message: 'string',
      percent: 'number',
      pipelineId: 'string',
      priority: 'string',
      state: 'string',
      templateList: SubmitAnalysisJobResponseBodyAnalysisJobTemplateList,
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

export class SubmitAnalysisJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the preset template analysis job that was submitted.
   */
  analysisJob?: SubmitAnalysisJobResponseBodyAnalysisJob;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B52658D4-07AB-43CD-82B0-210958A65E23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisJob: 'AnalysisJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisJob: SubmitAnalysisJobResponseBodyAnalysisJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.analysisJob && typeof (this.analysisJob as any).validate === 'function') {
      (this.analysisJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

