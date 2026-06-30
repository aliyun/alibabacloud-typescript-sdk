// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitYikePromptExpansionVoiceFixJobRequest extends $dara.Model {
  /**
   * @remarks
   * The task parameters, a JSON-formatted string. The following fields are included:
   * - model (String, required): The model name. Example: happyhorse-1.0-r2v.
   * - input (Object, required): The input data object.
   *   - prompt (String, required): The prompt content. Maximum length: 10,000 characters.
   *   - media (Array(Object), required): The list of media materials used to specify reference images and audio.
   *     - type (String, required): The type of the input media asset. Valid values: reference_image and reference_audio.
   *     - url (String, required): The URL of the input media asset.
   * - parameters (Object, required): The video generation parameter object.
   *   - duration (Integer, required): The video duration in seconds. The value must be a positive integer. Valid values: 5 to 15.
   *   - ratio (String, required): The aspect ratio of the video. Valid values: 16:9, 9:16, 4:3, 3:4, and 1:1.
   *   - resolution (String, required): The video resolution. Valid values: 720P and 1080P.
   *   - specialEdition (Bool, optional): The cost-effective edition parameter. This parameter can be set to true only when the resolution is 1080P.
   *   - skipPromptEnhancer (Bool, optional): Specifies whether to skip prompt enhancement. Default value: false.
   *   - skipVoiceResync (Bool, optional): Specifies whether to skip audio repair. Default value: false.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"model\\":\\"happyhorse-1.0-r2v\\",\\"input\\":{\\"prompt\\":\\"[Image 1]中身着红色旗袍的女性，镜头先以侧面中景勾勒旗袍修身剪裁与S型曲线，随即切换至低角度仰拍，捕捉她轻抬玉手展开[Image 2]中的折扇的同时，[Image 3]中的流苏耳坠随头部转动轻盈摆动的细节，最后推近至面部特写，定格在她指尖轻点扇骨、眼波流转间的含蓄风情，多视角全方位展现东方韵味。\\",\\"media\\":[{\\"type\\":\\"reference_image\\",\\"url\\":\\"https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20260424/mvzfud/hh-v2v-girl.jpg\\"},{\\"type\\":\\"reference_image\\",\\"url\\":\\"https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20260424/fvuihk/hh-v2v2-folding-fan.jpg\\"},{\\"type\\":\\"reference_image\\",\\"url\\":\\"https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20260424/imerii/hh-v2v-earrings.jpg\\"}]},\\"parameters\\":{\\"resolution\\":\\"720P\\",\\"ratio\\":\\"16:9\\",\\"duration\\":5,\\"specialEdition\\":false,\\"skipPromptEnhancer\\":false,\\"skipVoiceResync\\":false}}
   */
  jobParams?: string;
  /**
   * @remarks
   * The custom user parameter, a JSON string. This parameter is returned as-is in the callback result. Example: newsKey.
   * 
   * The system reserved field NotifyAddress specifies the callback URL. After the task is completed, a callback is sent. Example: {"NotifyAddress": "http://xxx.callback.url"}.
   * 
   * @example
   * {\\"newsKey\\":\\"NEWS_20260420_001\\",\\"key1\\":\\"value1\\", \\"NotifyAddress\\":\\"https://cms.example.com/callback/video-task\\"}
   * 系统保留字段 NotifyAddress，回调地址 URL，任务完成后回调 {"NotifyAddress": "http://xxx.callback.url"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      jobParams: 'JobParams',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobParams: 'string',
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

