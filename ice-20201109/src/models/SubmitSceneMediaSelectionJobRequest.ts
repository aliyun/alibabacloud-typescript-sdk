// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSceneMediaSelectionJobRequest extends $dara.Model {
  /**
   * @remarks
   * The editing configuration. Its structure depends on the value of JobType.
   * 
   * *   When JobType is set to Smart_Mix_Media_Select, see [Image-text matching](https://help.aliyun.com/zh/ims/use-cases/intelligent-graphic-matching-into-a-piece/?spm=a2c4g.11186623.help-menu-193643.d_3_2_0_1.7c3d6997qndkZj).
   * *   When JobType is set to Screen_Media_Highlights_Media_Select, see [Highlight mashup](https://help.aliyun.com/zh/ims/use-cases/create-highlight-videos?spm=a2c4g.11186623.help-menu-193643.d_3_2_0_3.84b5661bIcQULE).
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
   * *   When JobType is set to Smart_Mix_Media_Select, see [Image-text matching](https://help.aliyun.com/zh/ims/use-cases/intelligent-graphic-matching-into-a-piece/?spm=a2c4g.11186623.help-menu-193643.d_3_2_0_1.7c3d6997qndkZj).
   * *   When JobType is set to Screen_Media_Highlights_Media_Select, see [Highlight mashup](https://help.aliyun.com/zh/ims/use-cases/create-highlight-videos?spm=a2c4g.11186623.help-menu-193643.d_3_2_0_3.84b5661bIcQULE).
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
   * 		"Grand opening! A Freshippo store opens today at the nearby mall.",
   * 		"Great deals on snacks and drinks. Stop by!"
   * 	]
   * }
   */
  inputConfig?: string;
  /**
   * @remarks
   * The job type. Valid values:
   * 
   * *   Smart_Mix_Media_Select
   * *   Screen_Media_Highlights_Media_Select
   * 
   * Differences:
   * 
   * *   Smart_Mix_Media_Select: Matches voiceover scripts with provided video/image materials to select the most relevant clips and returns the matching results. Two options are available: Common mode, which is suitable for general-purpose materials like lifestyle vlogs, travel videos, and marketing content; Movie collections, which is optimized for materials with a coherent plot and specific characters, such as TV series and movies.
   * *   Screen_Media_Highlights_Media_Select: Automatically identifies and selects clips that are exciting or represent key story points from longer video materials.
   * 
   * This parameter is required.
   * 
   * @example
   * Smart_Mix_Media_Select
   */
  jobType?: string;
  /**
   * @remarks
   * The output configuration. Its structure and required fields depend on the value of JobType.
   * 
   * *   When JobType is set to Smart_Mix_Media_Select, see [Image-text matching](https://help.aliyun.com/zh/ims/use-cases/intelligent-graphic-matching-into-a-piece/?spm=a2c4g.11186623.help-menu-193643.d_3_2_0_1.7c3d6997qndkZj).
   * *   When JobType is set to Screen_Media_Highlights_Media_Select, see [Highlight mashup](https://help.aliyun.com/zh/ims/use-cases/create-highlight-videos?spm=a2c4g.11186623.help-menu-193643.d_3_2_0_3.84b5661bIcQULE).
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

