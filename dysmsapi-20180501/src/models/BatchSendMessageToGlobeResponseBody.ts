// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSendMessageToGlobeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of the mobile phone numbers that failed to receive the messages.
   * 
   * @example
   * ["931520581****","931530581****"]
   */
  failedList?: string;
  /**
   * @remarks
   * The sender ID that was returned. The API operation returns the sender ID that you have specified in the request parameters.
   * 
   * @example
   * Alicloud321
   */
  from?: string;
  /**
   * @remarks
   * The ID of the sent message.
   * 
   * @example
   * ["123****","124****"]
   */
  messageIdList?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8D28D3
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP status code. If OK is returned, the request is successful. For more information, see [Error codes](https://help.aliyun.com/document_detail/180674.html).
   * 
   * @example
   * OK
   */
  responseCode?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * The SMS Send Request was accepted
   */
  responseDescription?: string;
  /**
   * @remarks
   * The number of sent messages.
   * 
   * @example
   * 2
   */
  successCount?: string;
  static names(): { [key: string]: string } {
    return {
      failedList: 'FailedList',
      from: 'From',
      messageIdList: 'MessageIdList',
      requestId: 'RequestId',
      responseCode: 'ResponseCode',
      responseDescription: 'ResponseDescription',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedList: 'string',
      from: 'string',
      messageIdList: 'string',
      requestId: 'string',
      responseCode: 'string',
      responseDescription: 'string',
      successCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

