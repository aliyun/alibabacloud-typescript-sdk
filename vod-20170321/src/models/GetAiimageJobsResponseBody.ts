// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIImageJobsResponseBodyAIImageJobList extends $dara.Model {
  /**
   * @remarks
   * The OSS URL of the AI image.
   * >This is the task result. The URL does not contain complete authentication information. To obtain authentication information, generate it yourself or call the [ListAIImage](https://help.aliyun.com/document_detail/186924.html) operation to retrieve the media asset result.
   * 
   * @example
   * [{"Score":5.035636554444242,"Url":"http://outin-*****.oss-cn-shanghai.aliyuncs.com/357a8748c577*****789d2726e6436aa/image/ai/b0a7612554d*****5cbe3-00001.gif"}]
   */
  AIImageResult?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The time when the AI image processing task was created. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2020-10-15T03:30:03Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the AI image processing task.
   * 
   * @example
   * cf08a2c6e11e*****de1711b738b9067
   */
  jobId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - **success**: The task is successful.
   * - **fail**: The task failed.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The snapshot of the configuration information of the specified template when the task was submitted.
   * 
   * @example
   * {"Format":"gif","SetDefaultCover":"true"}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The AI template ID.
   * 
   * @example
   * 5a86a00f15194*****d7fe7de1b4a173
   */
  templateId?: string;
  /**
   * @remarks
   * The custom settings.
   * - The value must be a JSON string.
   * - The value must contain the MessageCallback or Extend parameter.
   * - The maximum length is 512 bytes.
   * 
   * For more information about the parameter structure, see [UserData](https://help.aliyun.com/document_detail/86952.html).
   * 
   * @example
   * {"Extend":{"localId":"****","test":"www"}}
   */
  userData?: string;
  /**
   * @remarks
   * The video ID.
   * 
   * @example
   * 357a8748c577*****789d2726e6436aa
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      AIImageResult: 'AIImageResult',
      code: 'Code',
      creationTime: 'CreationTime',
      jobId: 'JobId',
      message: 'Message',
      status: 'Status',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      userData: 'UserData',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIImageResult: 'string',
      code: 'string',
      creationTime: 'string',
      jobId: 'string',
      message: 'string',
      status: 'string',
      templateConfig: 'string',
      templateId: 'string',
      userData: 'string',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIImageJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of AI image processing tasks.
   */
  AIImageJobList?: GetAIImageJobsResponseBodyAIImageJobList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7721B494-1F78-4E*****E8-A7CEE7315BFA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIImageJobList: 'AIImageJobList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIImageJobList: { 'type': 'array', 'itemType': GetAIImageJobsResponseBodyAIImageJobList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.AIImageJobList)) {
      $dara.Model.validateArray(this.AIImageJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

