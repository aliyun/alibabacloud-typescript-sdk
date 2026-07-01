// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitIProductionJobShrinkRequest extends $dara.Model {
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
  inputShrink?: string;
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
  outputShrink?: string;
  /**
   * @remarks
   * The configuration for job scheduling.
   */
  scheduleConfigShrink?: string;
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

