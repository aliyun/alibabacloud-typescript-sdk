// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitIProductionJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * The OSS URL of the input file or the ID of the input media asset.
   * The OSS URL can be in one of the following formats:
   * 
   * 1. `oss://<bucket>/<object>`
   * 
   * 2. `http(s)://<bucket>.oss-<regionId>.aliyuncs.com/<object>`
   *    In these formats, `<bucket>` is the name of an OSS bucket in the same region as your project, and `<object>` is the file path.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  /**
   * @remarks
   * The type of input media. Valid values:
   * 
   * - `OSS`: An OSS file path.
   * 
   * - `Media`: A media asset ID.
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
  /**
   * @remarks
   * The service to which the media asset belongs.
   * 
   * @example
   * IMS
   */
  biz?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  /**
   * @remarks
   * If `Type` is set to `Media`, you can use this parameter to specify the OSS URL for the output file. The bucket must be registered in either IMS or VOD.
   * 
   * @example
   * http(s)://bucket.oss-[RegionId].aliyuncs.com/object
   */
  outputUrl?: string;
  /**
   * @remarks
   * The type of the output media. Valid values:
   * 
   * - `OSS`: An OSS file path.
   * 
   * - `Media`: A media asset ID.
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
   * The ID of the pipeline.
   * 
   * @example
   * 5246b8d12a62433ab77845074039c3dc
   */
  pipelineId?: string;
  /**
   * @remarks
   * The job priority, which can be an integer from 1 to 10. A smaller value indicates a higher priority.
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
   * The name of the algorithm function. Valid values:
   * 
   * - **Cover**: Generates a smart cover.
   * 
   * - **VideoClip**: Creates a video summary.
   * 
   * - **VideoDelogo**: Removes logos from a video.
   * 
   * - **VideoDetext**: Removes text from a video.
   * 
   * - **CaptionExtraction**: Extracts captions from a video.
   * 
   * - **VideoGreenScreenMatting**: Performs green screen keying for a video.
   * 
   * - **FaceBeauty**: Applies beauty filters to faces in a video.
   * 
   * - **VideoH2V**: Converts a horizontal video to a vertical video.
   * 
   * - **MusicSegmentDetect**: Detects chorus segments in music.
   * 
   * - **AudioBeatDetection**: Detects the beat of an audio track.
   * 
   * - **AudioQualityAssessment**: Assesses audio quality.
   * 
   * - **SpeechDenoise**: Reduces noise in speech audio.
   * 
   * - **AudioMixing**: Mixes audio tracks.
   * 
   * - **MusicDemix**: Separates vocals from accompaniment in music.
   * 
   * This parameter is required.
   * 
   * @example
   * Cover
   */
  functionName?: string;
  /**
   * @remarks
   * The input media asset. You can specify an OSS file or a media asset ID.
   * 
   * The requirements for input files vary by algorithm function. For more information, see the supplementary instructions.
   * 
   * This parameter is required.
   */
  input?: SubmitIProductionJobRequestInput;
  /**
   * @remarks
   * The algorithm job parameters, specified as a JSON-formatted string. The content of the JSON object varies by algorithm function. For more information, see the supplementary instructions.
   * 
   * @example
   * {"Model":"gif"}
   */
  jobParams?: string;
  /**
   * @remarks
   * The ID of the algorithm model. If you do not specify this parameter, the system uses the default model for the selected function. We recommend leaving this parameter empty unless you need to use a specific alternative model.
   * 
   * The following function offers an alternative model:
   * 
   * - `VideoDetext`
   * 
   *   - Set `ModelId` to `algo-video-detext-new` to use an advanced subtitle removal algorithm. This model provides higher quality results but is slower and more expensive than the default model.
   */
  modelId?: string;
  /**
   * @remarks
   * The name of the job, which can be up to 100 characters long.
   * 
   * @example
   * Test task
   */
  name?: string;
  /**
   * @remarks
   * The output destination. You can specify an OSS file path or a media asset ID.
   * 
   * The output files vary by algorithm function. For more information, see the supplementary instructions.
   * 
   * This parameter is required.
   */
  output?: SubmitIProductionJobRequestOutput;
  /**
   * @remarks
   * The configuration for job scheduling.
   */
  scheduleConfig?: SubmitIProductionJobRequestScheduleConfig;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  templateId?: string;
  /**
   * @remarks
   * Custom user data. The system passes this data through and returns it as-is in the callback or response. The length cannot exceed 256 characters.
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

