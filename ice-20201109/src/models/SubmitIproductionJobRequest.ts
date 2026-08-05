// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitIProductionJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * The input media. OSS paths and media asset IDs are supported.
   * OSS path rules (use either format):
   * 1. oss://bucket/object
   * 2. http(s)://bucket.oss-[regionId].aliyuncs.com/object
   * where bucket is the name of an OSS bucket in the same region as the current project, and object is the file path.
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
   * - OSS: an OSS path
   * 
   * - Media: a media asset ID
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
   * The business type to which the media asset belongs.
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
   * The OSS path of the output file when Type is set to Media. The bucket must be registered in IMS or VOD.
   * 
   * @example
   * http(s)://bucket.oss-[RegionId].aliyuncs.com/object
   */
  outputUrl?: string;
  /**
   * @remarks
   * The media type. Valid values:
   * 
   * - OSS: an OSS path
   * 
   * - Media: a media asset ID
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
   * The pipeline ID.
   * 
   * @example
   * 5246b8d12a62433ab77845074039c3dc
   */
  pipelineId?: string;
  /**
   * @remarks
   * The priority. Valid values: 1 to 10. A smaller value indicates a higher priority.
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
   * The name of the algorithm function to use. Valid values:
   * 
   * - **Cover**: intelligent cover
   * - **VideoClip**: video synopsis
   * - **VideoDelogo**: video logo removal
   * - **VideoDetext**: video subtitle removal
   * - **CaptionExtraction**: caption extraction
   * - **VideoGreenScreenMatting**: image matting
   * - **FaceBeauty**: video face beautification
   * - **VideoH2V**: intelligent landscape-to-portrait
   * - **MusicSegmentDetect**: chorus detection
   * - **AudioBeatDetection**: beat detection
   * - **AudioQualityAssessment**: audio quality assessment
   * - **SpeechDenoise**: speech denoising
   * - **AudioMixing**: audio mixing
   * - **MusicDemix**: vocal and accompaniment separation
   * 
   * This parameter is required.
   * 
   * @example
   * Cover
   */
  functionName?: string;
  /**
   * @remarks
   * The input media. Object Storage Service (OSS) paths and media asset IDs are supported.
   * 
   * Different algorithm functions have different input file requirements. For more information, see the supplementary description below.
   * 
   * This parameter is required.
   */
  input?: SubmitIProductionJobRequestInput;
  /**
   * @remarks
   * The algorithm job parameters. This is a JSON object. The parameters vary depending on the algorithm. For more information, see the supplementary description.
   * 
   * @example
   * {"Model":"gif"}
   */
  jobParams?: string;
  /**
   * @remarks
   * The algorithm model ID. If this parameter is left empty, the default model for the corresponding function is used. In most cases, leave this parameter empty to use the default model.
   * 
   * The following algorithm functions have non-default models available:
   * * VideoDetext
   *   * ModelId = algo-video-detext-new: a subtitle removal algorithm with better results but slower speed and higher cost than the default algorithm.
   */
  modelId?: string;
  /**
   * @remarks
   * The job name. The name can be up to 100 characters in length.
   * 
   * @example
   * Test task
   */
  name?: string;
  /**
   * @remarks
   * The output media. OSS paths and media asset IDs are supported.
   * 
   * Different algorithm functions produce different output files. For more information, see the supplementary description below.
   * 
   * This parameter is required.
   */
  output?: SubmitIProductionJobRequestOutput;
  /**
   * @remarks
   * The job scheduling configuration.
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
   * The custom user data, which is returned as-is when you retrieve the result. The value can be up to 256 characters in length.
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

