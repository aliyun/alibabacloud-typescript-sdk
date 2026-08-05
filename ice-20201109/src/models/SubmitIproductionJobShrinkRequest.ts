// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitIProductionJobShrinkRequest extends $dara.Model {
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
  inputShrink?: string;
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
  outputShrink?: string;
  /**
   * @remarks
   * The job scheduling configuration.
   */
  scheduleConfigShrink?: string;
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
      inputShrink: 'Input',
      jobParams: 'JobParams',
      modelId: 'ModelId',
      name: 'Name',
      outputShrink: 'Output',
      scheduleConfigShrink: 'ScheduleConfig',
      templateId: 'TemplateId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      inputShrink: 'string',
      jobParams: 'string',
      modelId: 'string',
      name: 'string',
      outputShrink: 'string',
      scheduleConfigShrink: 'string',
      templateId: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

