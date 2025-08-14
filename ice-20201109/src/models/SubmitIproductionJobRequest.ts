// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitIProductionJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * The input file. The file can be an OSS object or a media asset. You can specify the path of an OSS object in one of the following formats:
   * 
   * 1.  oss://bucket/object
   * 2.  http(s)://bucket.oss-[regionId].aliyuncs.com/object bucket in the path specifies an OSS bucket that resides in the same region as the intelligent production job. object in the path specifies the object path in OSS.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  /**
   * @remarks
   * The media type. Valid values:
   * 
   * *   OSS: OSS object
   * *   Media: media asset
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIProductionJobRequestOutput extends $dara.Model {
  biz?: string;
  /**
   * @remarks
   * The output file. If Type is set to OSS, set this parameter to the path of an OSS object. If Type is set to Media, set this parameter to the ID of a media asset. You can specify the path of an OSS object in one of the following formats:
   * 
   * 1.  oss://bucket/object
   * 2.  http(s)://bucket.oss-[RegionId].aliyuncs.com/object bucket in the path specifies an OSS bucket that resides in the same region as the intelligent production job. object in the path specifies the object path in OSS.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  outputUrl?: string;
  /**
   * @remarks
   * The media type. Valid values:
   * 
   * *   OSS: OSS object
   * *   Media: media asset
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
      media: 'Media',
      outputUrl: 'OutputUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: 'string',
      media: 'string',
      outputUrl: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIProductionJobRequestScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraVideo Media Processing (MPS) queue.
   * 
   * @example
   * 5246b8d12a62433ab77845074039c3dc
   */
  pipelineId?: string;
  /**
   * @remarks
   * The priority of the job. Valid values: 1 to 10. A smaller value indicates a higher priority.
   * 
   * @example
   * 6
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIProductionJobRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the algorithm that you want to use for the job. Valid values:
   * 
   * *   **Cover**: This algorithm intelligently generates a thumbnail image for a video.
   * *   **VideoClip**: This algorithm intelligently generates a summary for a video.
   * *   **VideoDelogo**: This algorithm removes logos from a video.
   * *   **VideoDetext**: This algorithm removes captions from a video.
   * *   **CaptionExtraction**: This algorithm extracts captions from a video and generates the caption file.
   * *   **VideoGreenScreenMatting**: This algorithm performs green-screen image matting on a video and generates a new video.
   * *   **FaceBeauty**: This algorithm performs video retouching.
   * *   **VideoH2V**: This algorithm transforms a video from the landscape mode to the portrait mode.
   * *   **MusicSegmentDetect**: This algorithm detects the chorus of a song.
   * *   **AudioBeatDetection**: This algorithm detects rhythms.
   * *   **AudioQualityAssessment**: This algorithm assesses the audio quality.
   * *   **SpeechDenoise**: This algorithm performs noise reduction.
   * *   **AudioMixing**: This algorithm mixes audio streams.
   * 
   * This parameter is required.
   * 
   * @example
   * Cover
   */
  functionName?: string;
  /**
   * @remarks
   * The input file. The file can be an Object Storage Service (OSS) object or a media asset.
   * 
   * This parameter is required.
   */
  input?: SubmitIProductionJobRequestInput;
  /**
   * @remarks
   * The algorithm-specific parameters. The parameters are specified as JSON objects and vary based on the algorithm. For more information, see the "Parameters of JobParams" section of this topic.
   * 
   * @example
   * {"Model":"gif"}
   */
  jobParams?: string;
  modelId?: string;
  /**
   * @remarks
   * The name of the intelligent production job. The name can be up to 100 characters in length.
   */
  name?: string;
  /**
   * @remarks
   * The output file. The file can be an OSS object or a media asset.
   * 
   * This parameter is required.
   */
  output?: SubmitIProductionJobRequestOutput;
  /**
   * @remarks
   * The scheduling configuration.
   */
  scheduleConfig?: SubmitIProductionJobRequestScheduleConfig;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  templateId?: string;
  /**
   * @remarks
   * The user-defined data that is returned in the response. The value can be up to 1,024 bytes in length.
   * 
   * @example
   * {"test":1}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      input: 'Input',
      jobParams: 'JobParams',
      modelId: 'ModelId',
      name: 'Name',
      output: 'Output',
      scheduleConfig: 'ScheduleConfig',
      templateId: 'TemplateId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      input: SubmitIProductionJobRequestInput,
      jobParams: 'string',
      modelId: 'string',
      name: 'string',
      output: SubmitIProductionJobRequestOutput,
      scheduleConfig: SubmitIProductionJobRequestScheduleConfig,
      templateId: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(this.scheduleConfig && typeof (this.scheduleConfig as any).validate === 'function') {
      (this.scheduleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

