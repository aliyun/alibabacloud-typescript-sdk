// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYikePromptExpansionVoiceFixJobResponseBodyJobResult extends $dara.Model {
  /**
   * @remarks
   * Oss Url
   * 
   * @example
   * https://test.oss-cn-shanghai.aliyuncs.com/test.mp4
   */
  outputUrl?: string;
  static names(): { [key: string]: string } {
    return {
      outputUrl: 'OutputUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetYikePromptExpansionVoiceFixJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2026-01-30T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The error code. This parameter is returned when the task is in the Failed state.
   * 
   * @example
   * Forbidden
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ab4802364a2e49208c99efab82df****
   */
  jobId?: string;
  /**
   * @remarks
   * The task parameters, in JSON format. The following fields are included:
   * - model (String, required): The model name. Example: happyhorse-1.0-r2v.
   * - input (Object, required): The input data object.
   *   - prompt (String, required): The prompt content. The maximum length is 10,000 characters.
   *   - media (Array(Object), required): The list of media materials used to specify reference images and audio.
   *     - type (String, required): The input media type. Valid values: reference_image and reference_audio.
   *     - url (String, required): The URL of the input media.
   * - parameters (Object, required): The video generation parameter object.
   *   - duration (Integer, required): The video duration in seconds. The value must be a positive integer. Valid values: 5 to 15.
   *   - ratio (String, required): The aspect ratio. Valid values: 16:9, 9:16, 4:3, 3:4, and 1:1.
   *   - resolution (String, required): The video resolution. Valid values: 720P and 1080P.
   *   - specialEdition (Bool, optional): The cost-effective edition parameter. This parameter can be set to true only when the resolution is 1080P.
   *   - skipPromptEnhancer (Bool, optional): Specifies whether to skip prompt enhancement. Default value: false.
   *   - skipVoiceResync (Bool, optional): Specifies whether to skip audio repair. Default value: false.
   * 
   * @example
   * {\\"model\\":\\"happyhorse-1.0-r2v\\",\\"input\\":{\\"prompt\\":\\"[Image 1]中身着红色旗袍的女性，镜头先以侧面中景勾勒旗袍修身剪裁与S型曲线，随即切换至低角度仰拍，捕捉她轻抬玉手展开[Image 2]中的折扇的同时，[Image 3]中的流苏耳坠随头部转动轻盈摆动的细节，最后推近至面部特写，定格在她指尖轻点扇骨、眼波流转间的含蓄风情，多视角全方位展现东方韵味。\\",\\"media\\":[{\\"type\\":\\"reference_image\\",\\"url\\":\\"https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20260424/mvzfud/hh-v2v-girl.jpg\\"},{\\"type\\":\\"reference_image\\",\\"url\\":\\"https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20260424/fvuihk/hh-v2v2-folding-fan.jpg\\"},{\\"type\\":\\"reference_image\\",\\"url\\":\\"https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20260424/imerii/hh-v2v-earrings.jpg\\"}]},\\"parameters\\":{\\"resolution\\":\\"720P\\",\\"ratio\\":\\"16:9\\",\\"duration\\":5,\\"specialEdition\\":false,\\"skipPromptEnhancer\\":false,\\"skipVoiceResync\\":false}}
   */
  jobParams?: string;
  /**
   * @remarks
   * The task result of the node.
   */
  jobResult?: GetYikePromptExpansionVoiceFixJobResponseBodyJobResult[];
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **Succeeded**: The task is processed.
   * 
   * - **Failed**: The task failed.
   * 
   * - **Running**: The task is being processed.
   * 
   * @example
   * Succeeded
   */
  jobStatus?: string;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2025-06-24T00:55:06Z
   */
  startTime?: string;
  /**
   * @remarks
   * The custom user parameter.
   * 
   * @example
   * {"testKey":"testValue"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobId: 'JobId',
      jobParams: 'JobParams',
      jobResult: 'JobResult',
      jobStatus: 'JobStatus',
      requestId: 'RequestId',
      startTime: 'StartTime',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      jobId: 'string',
      jobParams: 'string',
      jobResult: { 'type': 'array', 'itemType': GetYikePromptExpansionVoiceFixJobResponseBodyJobResult },
      jobStatus: 'string',
      requestId: 'string',
      startTime: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobResult)) {
      $dara.Model.validateArray(this.jobResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

