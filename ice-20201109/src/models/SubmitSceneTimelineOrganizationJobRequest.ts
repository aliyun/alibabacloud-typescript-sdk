// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSceneTimelineOrganizationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The editing configuration. Its structure depends on the value of JobType.
   * 
   * *   When JobType is set to Smart_Mix_Timeline_Organize, see [Image-text matching](https://help.aliyun.com/zh/ims/use-cases/intelligent-graphic-matching-into-a-piece/?spm=a2c4g.11186623.help-menu-193643.d_3_2_0_1.7c3d6997qndkZj).
   * *   When JobType is set to Screen_Media_Highlights_Timeline_Organize, see [Highlight mashup](https://help.aliyun.com/zh/ims/use-cases/create-highlight-videos?spm=a2c4g.11186623.help-menu-193643.d_3_2_0_3.84b5661bIcQULE).
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
   * The input configuration. Its structure and required fields depend on the value of JobType.
   * 
   * *   When JobType is set to Smart_Mix_Timeline_Organize, see [Image-text matching](https://help.aliyun.com/zh/ims/use-cases/intelligent-graphic-matching-into-a-piece/?spm=a2c4g.11186623.help-menu-193643.d_3_2_0_1.7c3d6997qndkZj).
   * *   When JobType is set to Screen_Media_Highlights_Timeline_Organize, see [Highlight mashup](https://help.aliyun.com/zh/ims/use-cases/create-highlight-videos?spm=a2c4g.11186623.help-menu-193643.d_3_2_0_3.84b5661bIcQULE).
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
   * 		"A new Freshippo store just opened in the nearby mall. Today is the grand opening."
   * 	]
   * }
   */
  inputConfig?: string;
  /**
   * @remarks
   * The job type. Valid values:
   * 
   * *   Smart_Mix_Timeline_Organize: Image-text matching.
   * *   Screen_Media_Highlights_Timeline_Organize: Highlight mashup.
   * 
   * Differences:
   * 
   * *   Image-text matching: Arranges a timeline based on the results of matching a voiceover script to media assets. Ideal for bulk marketing videos and general-purpose montages.
   * *   Highlight mashup: Arranges a timeline based on the results of highlight clip selection. Ideal for creating action-packed highlight reels from short-form dramas.
   * 
   * This parameter is required.
   * 
   * @example
   * Smart_Mix_Timeline_Organize
   */
  jobType?: string;
  /**
   * @remarks
   * The media selection results from a previously run SubmitSceneMediaSelectionJob. You can retrieve this result by calling GetBatchMediaProducingJob.
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
   * 				"text": "A new Freshippo store just opened in the nearby mall"
   * 			},
   * 			{
   * 				"duration": 1.566667,
   * 				"matchClipList": [{
   * 					"endTime": 1.54,
   * 					"mediaId": "****a0900f5071efbf1ce7e6c66a****",
   * 					"startTime": 0
   * 				}],
   * 				"text": "Today is the grand opening"
   * 			}
   * 		]
   * 	}]
   * }
   */
  mediaSelectResult?: string;
  /**
   * @remarks
   * The output configuration. Its structure and required fields depend on the value of JobType.
   * 
   * *   When JobType is set to Smart_Mix_Timeline_Organize, see [Image-text matching](https://help.aliyun.com/zh/ims/use-cases/intelligent-graphic-matching-into-a-piece/?spm=a2c4g.11186623.help-menu-193643.d_3_2_0_1.7c3d6997qndkZj).
   * *   When JobType is set to Screen_Media_Highlights_Timeline_Organize, see [Highlight mashup](https://help.aliyun.com/zh/ims/use-cases/create-highlight-videos?spm=a2c4g.11186623.help-menu-193643.d_3_2_0_3.84b5661bIcQULE).
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
   * The user-defined data, including the business and callback configurations. For more information, see [UserData](~~357745#section-urj-v3f-0s1~~).
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

