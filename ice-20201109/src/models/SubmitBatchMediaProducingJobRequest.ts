// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitBatchMediaProducingJobRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request.
   * 
   * @example
   * ****12e8864746a0a398****
   */
  clientToken?: string;
  /**
   * @remarks
   * The editing configuration. For the specific structure definition, see [EditingConfig](~~2692547#1be9bba03b7qu~~).
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
   * The input configuration. For the specific structure definition, see [InputConfig](~~2692547#2faed1559549n~~).
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
   *       "Hema Fresh grand opening in Huilongguan",
   *       "Hema Fresh grand opening" ],
   *   "SpeechTextArray": [
   *       "A new Hema Fresh store just opened in the nearby mall, today is the first day of business"
   *       "There are quite a few people in the mall, snacks and beverages are relatively cheap, come check it out" ]
   * }
   */
  inputConfig?: string;
  /**
   * @remarks
   * The output configuration. For the specific structure definition, see [OutputConfig](~~2692547#447b928fcbuoa~~).
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
   * The template parameters. You can configure multiple one-click video production templates, and one is randomly selected and applied. For details, see [TemplateConfig metric description](https://www.alibabacloud.com/help/en/ims/use-cases/batch-video-production-public-parameters#32c3bea6182sy).
   * 
   * @example
   * ["****b4549d46c88681030f6e****","****549d46c88b4681030f6e****"]
   */
  templateConfig?: string;
  /**
   * @remarks
   * The user business configuration and callback configuration. For the specific structure definition, see [UserData configuration](~~357745#section-urj-v3f-0s1~~).
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

