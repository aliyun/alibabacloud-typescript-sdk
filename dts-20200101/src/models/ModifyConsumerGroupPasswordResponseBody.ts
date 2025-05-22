// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyConsumerGroupPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current password of the consumer group.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because this parameter will be removed in the future.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The username of the consumer group. You can call the [DescribeConsumerGroup](https://help.aliyun.com/document_detail/122886.html) operation to query the username.
   * 
   * @example
   * A06B5CFF-9576-4BC1-BE62-A3D43E1F****
   */
  requestId?: string;
  /**
   * @remarks
   * The new password of the consumer group.
   * 
   * *   A password must contain two or more of the following characters: uppercase letters, lowercase letters, digits, and special characters.
   * *   A password must be 8 to 32 characters in length.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

