// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSceneMediaSelectionJobRequest extends $dara.Model {
  /**
   * @remarks
   * The editing configuration, which is the same as the EditingConfig parameter for the intelligent graphic matching and highlight mashup features of one-click video production.
   * - When JobType is set to Smart_Mix_Media_Select, see [Intelligent graphic matching parameter settings](https://www.alibabacloud.com/help/en/ims/use-cases/intelligent-graphic-matching-into-a-piece/).
   * - When JobType is set to Screen_Media_Highlights_Media_Select, see [Highlight mashup parameter settings](https://www.alibabacloud.com/help/en/ims/use-cases/create-highlight-videos).
   * 
   * @example
   * {
   *   "MediaConfig": {
   *       "Volume": 0
   *   },
   *   "SpeechConfig": {
   *       "Volume": 1
   *   },
   *  "BackgroundMusicConfig": {
   *       "Volume": 0.3
   *   }
   * }
   */
  editingConfig?: string;
  /**
   * @remarks
   * The input configuration, which is the same as the InputConfig parameter for the intelligent graphic matching and highlight mashup features of one-click video production.
   * - When JobType is set to Smart_Mix_Media_Select, see [Intelligent graphic matching parameter settings](https://www.alibabacloud.com/help/en/ims/use-cases/intelligent-graphic-matching-into-a-piece/).
   * - When JobType is set to Screen_Media_Highlights_Media_Select, see [Highlight mashup parameter settings](https://www.alibabacloud.com/help/en/ims/use-cases/create-highlight-videos).
   * 
   * This parameter is required.
   * 
   * @example
   * {
   * 	"BackgroundMusic": "****75c3936f3a8743850f2da942****",
   * 	"MediaArray": [
   * 		"https://test-bucket.oss-cn-shanghai.aliyuncs.com/test.mp4"
   * 	],
   * 	"SpeechTextArray": [
   * 		"A new Hema Fresh store just opened at the mall nearby, and today is its grand opening.",
   * 		"There are quite a few people in the mall, and snacks and drinks are pretty affordable—come check it out!"
   * 	]
   * }
   */
  inputConfig?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - Smart_Mix_Media_Select: intelligent matching material selection.
   * - Screen_Media_Highlights_Media_Select: highlight mashup material selection.
   * 
   * Differences between the two scenarios:
   * - Intelligent matching: You input voiceover scripts along with video and image materials. The system selects the most matching video and image materials based on the voiceover script content and returns the matching results. This scenario includes two sub-scenarios: general edition and film and television highlight edition. The general edition is suitable for daily general-purpose materials such as lifestyle, travel, and marketing. The film and television highlight edition is more suitable for plot-driven materials such as TV series and movies.
   * - Highlight mashup: You input video materials (typically multi-episode short dramas). The system automatically selects appropriate highlight segments based on highlight definitions or storylines for subsequent mashup production.
   * 
   * This parameter is required.
   * 
   * @example
   * Smart_Mix_Media_Select
   */
  jobType?: string;
  /**
   * @remarks
   * The output configuration, which is the same as the OutputConfig parameter for the intelligent graphic matching and highlight mashup features of one-click video production.
   * - When JobType is set to Smart_Mix_Media_Select, see [Intelligent graphic matching parameter settings](https://www.alibabacloud.com/help/en/ims/use-cases/intelligent-graphic-matching-into-a-piece/).
   * - When JobType is set to Screen_Media_Highlights_Media_Select, see [Highlight mashup parameter settings](https://www.alibabacloud.com/help/en/ims/use-cases/create-highlight-videos).
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *   "MediaURL": "http://test-bucket.oss-cn-shanghai.aliyuncs.com/xxx_{index}.mp4",
   *   "Count": 1,
   *   "Width": 1080,
   *   "Height": 1920
   * }
   */
  outputConfig?: string;
  /**
   * @remarks
   * The user business and callback configurations. For more information about the structure, see [UserData configuration](~~357745#section-urj-v3f-0s1~~).
   * 
   * @example
   * {"NotifyAddress":"http://xx.xx.xxx"} or {"NotifyAddress":"https://xx.xx.xxx"} or {"NotifyAddress":"ice-callback-demo"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      editingConfig: 'EditingConfig',
      inputConfig: 'InputConfig',
      jobType: 'JobType',
      outputConfig: 'OutputConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingConfig: 'string',
      inputConfig: 'string',
      jobType: 'string',
      outputConfig: 'string',
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

