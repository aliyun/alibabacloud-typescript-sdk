// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitIProductionJobShrinkRequest extends $dara.Model {
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
  inputShrink?: string;
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
  outputShrink?: string;
  /**
   * @remarks
   * The scheduling configuration.
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
   * The user-defined data that is returned in the response. The value can be up to 1,024 bytes in length.
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

