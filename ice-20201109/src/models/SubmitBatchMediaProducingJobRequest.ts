// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitBatchMediaProducingJobRequest extends $dara.Model {
  /**
   * @remarks
   * A client-side token used to ensure request idempotence.
   * 
   * @example
   * ****12e8864746a0a398****
   */
  clientToken?: string;
  /**
   * @remarks
   * The editing configuration. For the structure definition, see [EditingConfig](~~2692547#1be9bba03b7qu~~).
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
   * The input configuration. For the structure definition, see [InputConfig](~~2692547#2faed1559549n~~).
   * 
   * @example
   * {
   *   "MediaGroupArray": [{
   *       "GroupName": "MediaGroup1",
   *       "MediaArray": [
   *         "****9d46c886b45481030f6e****",
   *         "****6c886b4549d481030f6e****" ]
   *     }, {
   *       "GroupName": "MediaGroup2",
   *       "MediaArray": [
   *         "****d46c886810b454930f6e****",
   *         "****4549d886810b46c30f6e****" ]
   *   }],
   *   "TitleArray": [
   *       "回龙观盒马鲜生开业啦",
   *       "盒马鲜生开业啦" ],
   *   "SpeechTextArray": [
   *       "附近的商场新开了一家盒马鲜生，今天是第一天开业"
   *       "商场里的人不少，零食、酒水都比较便宜大家也快来看看呀" ]
   * }
   */
  inputConfig?: string;
  /**
   * @remarks
   * The output configuration. For the structure definition, see [OutputConfig](~~2692547#447b928fcbuoa~~).
   * 
   * @example
   * {
   *   "MediaURL": "http://xxx.oss-cn-shanghai.aliyuncs.com/xxx_{index}.mp4",
   *   "Count": 20,
   *   "MaxDuration": 15,
   *   "Width": 1080,
   *   "Height": 1920,
   *   "Video": {"Crf": 27}
   * }
   */
  outputConfig?: string;
  /**
   * @remarks
   * The template parameters. You can configure multiple templates for one-click smart video creation. The system randomly selects one template to apply. For more information, see [TemplateConfig parameters](https://help.aliyun.com/zh/ims/use-cases/batch-video-production-public-parameters?spm=a2c4g.11186623.help-menu-193643.d_3_2_0_5.342860c5H30VVS\\&scm=20140722.H_2877814._.OR_help-T_cn~zh-V_1#32c3bea6182sy).
   * 
   * @example
   * ["****b4549d46c88681030f6e****","****549d46c88b4681030f6e****"]
   */
  templateConfig?: string;
  /**
   * @remarks
   * Custom business and callback configurations. For the structure definition, see [UserData configuration](~~357745#section-urj-v3f-0s1~~).
   * 
   * @example
   * {"NotifyAddress":"http://xx.xx.xxx"} or {"NotifyAddress":"https://xx.xx.xxx"} or {"NotifyAddress":"ice-callback-demo"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      editingConfig: 'EditingConfig',
      inputConfig: 'InputConfig',
      outputConfig: 'OutputConfig',
      templateConfig: 'TemplateConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      editingConfig: 'string',
      inputConfig: 'string',
      outputConfig: 'string',
      templateConfig: 'string',
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

