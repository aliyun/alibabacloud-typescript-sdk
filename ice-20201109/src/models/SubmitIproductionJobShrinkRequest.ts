// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitIProductionJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the algorithm feature to be used. Valid values:
   * 
   * - **Cover**: intelligent cover
   * - **VideoClip**: video synopsis
   * - **VideoDelogo**: video icon removal
   * - **VideoDetext**: video subtitle removal
   * - **CaptionExtraction**: subtitle fetch
   * - **VideoGreenScreenMatting**: image matting
   * - **FaceBeauty**: video face beautification
   * - **VideoH2V**: video landscape-to-portrait conversion
   * - **MusicSegmentDetect**: chorus detection
   * - **AudioBeatDetection**: beat detection
   * - **AudioQualityAssessment**: audio quality assessment
   * - **SpeechDenoise**: speech noise reduction
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
   * The input media. OSS paths and media asset IDs are supported.
   * 
   * The file requirements for the input media vary based on the algorithm feature. For more information, see the supplementary instructions below.
   * 
   * This parameter is required.
   */
  inputShrink?: string;
  /**
   * @remarks
   * The algorithm job parameters. The value is a JSON object. The parameters vary based on the algorithm. For more information, see the supplementary instructions.
   * 
   * @example
   * {"Model":"gif"}
   */
  jobParams?: string;
  /**
   * @remarks
   * The algorithm model ID. If this parameter is left empty, the default model for the corresponding feature is used. You can leave this parameter empty and use the default model.
   * 
   * The following algorithm features support non-default models:
   * * VideoDetext
   *   * ModelId = algo-video-detext-new: a subtitle removal algorithm that delivers better results but runs slower and costs more than the default algorithm.
   * 
   * @example
   * algo-video-detext-new
   */
  modelId?: string;
  /**
   * @remarks
   * The name of the job. The name can be up to 100 characters in length.
   * 
   * @example
   * Test job
   */
  name?: string;
  /**
   * @remarks
   * The output media. OSS paths and media asset IDs are supported.
   * 
   * The output files for the Output parameter vary based on the algorithm feature. For more information, see the supplementary instructions below.
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
   * The custom user data. The data is returned as is when the result is obtained. The value can be up to 256 characters in length.
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

