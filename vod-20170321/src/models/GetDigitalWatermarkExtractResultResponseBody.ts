// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDigitalWatermarkExtractResultResponseBodyAiExtractResultList extends $dara.Model {
  /**
   * @remarks
   * The time when the watermark extraction job was created.
   * 
   * @example
   * 2023-09-16T02:49:04Z
   */
  createTime?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the watermark extraction job.
   * 
   * @example
   * 3af004763bcf459698860f4ede20****
   */
  jobId?: string;
  /**
   * @remarks
   * The time when the watermark extraction job was last updated.
   * 
   * @example
   * 2023-09-17T06:20:45Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The status of the watermark extraction job. Valid values:
   * 
   * *   **Success**
   * *   **Failed**
   * *   **Processing**
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The extracted watermark content.
   * 
   * @example
   * test mark
   */
  waterMarkText?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorMessage: 'ErrorMessage',
      jobId: 'JobId',
      modifyTime: 'ModifyTime',
      status: 'Status',
      waterMarkText: 'WaterMarkText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorMessage: 'string',
      jobId: 'string',
      modifyTime: 'string',
      status: 'string',
      waterMarkText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDigitalWatermarkExtractResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the watermark extraction job.
   */
  aiExtractResultList?: GetDigitalWatermarkExtractResultResponseBodyAiExtractResultList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 42E0554B-80F4-4921-****-ACFB22CAAAD0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aiExtractResultList: 'AiExtractResultList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiExtractResultList: { 'type': 'array', 'itemType': GetDigitalWatermarkExtractResultResponseBodyAiExtractResultList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aiExtractResultList)) {
      $dara.Model.validateArray(this.aiExtractResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

