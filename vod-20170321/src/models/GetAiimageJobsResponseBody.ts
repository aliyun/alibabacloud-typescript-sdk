// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIImageJobsResponseBodyAIImageJobList extends $dara.Model {
  /**
   * @remarks
   * The Object Storage Service (OSS) URL of the image file.
   * 
   * > This parameter does not include the complete authentication information. To obtain the authentication information, you must generate a signed URL. Alternatively, you can call the [ListAIImageInfo](~~ListAIImageInfo~~) operation to obtain the image information.
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
   * The time when the image AI processing job was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2020-10-15T03:30:03Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the image AI processing job.
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
   * The status of the job. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The configurations of the AI template that was used to submit the job.
   * 
   * @example
   * {"Format":"gif","SetDefaultCover":"true"}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The ID of the AI template.
   * 
   * @example
   * 5a86a00f15194*****d7fe7de1b4a173
   */
  templateId?: string;
  /**
   * @remarks
   * The user data.
   * 
   * *   The value must be a JSON string.
   * *   The MessageCallback or Extend parameter is returned.
   * *   The value contains a maximum of 512 bytes.
   * 
   * For more information, see the "UserData: specifies the custom configurations for media upload" section of the [Request parameters](https://help.aliyun.com/document_detail/86952.html) topic.
   * 
   * @example
   * {"Extend":{"localId":"****","test":"www"}}
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the video.
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
   * The image AI processing jobs.
   */
  AIImageJobList?: GetAIImageJobsResponseBodyAIImageJobList[];
  /**
   * @remarks
   * The ID of the request.
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

