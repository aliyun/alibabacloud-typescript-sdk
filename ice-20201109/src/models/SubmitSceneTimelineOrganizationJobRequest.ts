// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSceneTimelineOrganizationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The editing configuration. This parameter is the same as the EditingConfig parameter for the one-click video generation intelligent graphic matching and high-energy mashup features.
   * - When JobType is set to Smart_Mix_Timeline_Organize, see [Parameter settings for intelligent graphic matching](https://www.alibabacloud.com/help/en/ims/use-cases/intelligent-graphic-matching-into-a-piece/).
   * - When JobType is set to Screen_Media_Highlights_Timeline_Organize, see [Parameter settings for high-energy mashup](https://www.alibabacloud.com/help/en/ims/use-cases/create-highlight-videos).
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
   * The input configuration. This parameter is the same as the InputConfig parameter for the one-click video generation intelligent graphic matching and high-energy mashup features.
   * - When JobType is set to Smart_Mix_Timeline_Organize, see [Parameter settings for intelligent graphic matching](https://www.alibabacloud.com/help/en/ims/use-cases/intelligent-graphic-matching-into-a-piece/).
   * - When JobType is set to Screen_Media_Highlights_Timeline_Organize, see [Parameter settings for high-energy mashup](https://www.alibabacloud.com/help/en/ims/use-cases/create-highlight-videos).
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
   * 		"A new Hema Fresh store just opened at the mall nearby, and today is its grand opening."
   * 	]
   * }
   */
  inputConfig?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - Smart_Mix_Timeline_Organize: intelligent matching timeline orchestration.
   * - Screen_Media_Highlights_Timeline_Organize: high-energy mashup timeline orchestration.
   * 
   * Differences between the two scenarios:
   * - Intelligent matching: automatically organizes one or more timelines for final videos based on the material selection results of the intelligent matching scenario (the matching results of voiceover scripts and materials). This scenario is mostly applicable to batch marketing and general mashup scenarios.
   * - High-energy mashup: automatically organizes one or more timelines for final videos based on the material selection results of the high-energy mashup scenario (the selection results of high-energy clips). This scenario is mostly applicable to high-energy mashup scenarios for short dramas.
   * 
   * This parameter is required.
   * 
   * @example
   * Smart_Mix_Timeline_Organize
   */
  jobType?: string;
  /**
   * @remarks
   * The material selection results. You can call SubmitSceneMediaSelectionJob to submit a material selection task and call GetBatchMediaProducingJob to obtain the selection results.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   * 	"textMatchMediaOutputList": [{
   * 		"textMatchMediaSentenceOutputList": [{
   * 				"duration": 3.366667,
   * 				"matchClipList": [{
   * 					"endTime": 11.16,
   * 					"mediaId": "****a0900f5071efbf1ce7e6c66a****",
   * 					"startTime": 8.04
   * 				}],
   * 				"text": "A new Hema Fresh store just opened at the mall nearby"
   * 			},
   * 			{
   * 				"duration": 1.566667,
   * 				"matchClipList": [{
   * 					"endTime": 1.54,
   * 					"mediaId": "****a0900f5071efbf1ce7e6c66a****",
   * 					"startTime": 0
   * 				}],
   * 				"text": "and today is its grand opening"
   * 			}
   * 		]
   * 	}]
   * }
   */
  mediaSelectResult?: string;
  /**
   * @remarks
   * The output configuration. This parameter is the same as the OutputConfig parameter for the one-click video generation intelligent graphic matching and high-energy mashup features.
   * - When JobType is set to Smart_Mix_Timeline_Organize, see [Parameter settings for intelligent graphic matching](https://www.alibabacloud.com/help/en/ims/use-cases/intelligent-graphic-matching-into-a-piece/).
   * - When JobType is set to Screen_Media_Highlights_Timeline_Organize, see [Parameter settings for high-energy mashup](https://www.alibabacloud.com/help/en/ims/use-cases/create-highlight-videos).
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
   * The user business and callback configurations. For more information about the structure, see [UserData configuration instructions](~~357745#section-urj-v3f-0s1~~).
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
      mediaSelectResult: 'MediaSelectResult',
      outputConfig: 'OutputConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingConfig: 'string',
      inputConfig: 'string',
      jobType: 'string',
      mediaSelectResult: 'string',
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

