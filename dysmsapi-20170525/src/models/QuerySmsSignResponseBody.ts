// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsSignResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the request.
   * 
   * - `OK` indicates that the request was successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The date and time when the SMS signature was created.
   * 
   * @example
   * 2019-01-08 16:44:13
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The review reason.
   * 
   * - If the review status is **Approved** or **Pending Review**, this parameter is empty.
   * 
   * - If the review status is **Rejected**, this parameter provides the reason for the rejection.
   * 
   * @example
   * 文件不能证明信息真实性，请重新上传
   */
  reason?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CC89A90C-978F-46AC-B80D-54738371E7CA
   */
  requestId?: string;
  /**
   * @remarks
   * The SMS signature.
   * 
   * @example
   * 阿里云
   */
  signName?: string;
  /**
   * @remarks
   * The review status of the SMS signature. Valid values:
   * 
   * - **0**: Pending Review.
   * 
   * - **1**: Approved.
   * 
   * - **2**: Rejected. For details, see the `Reason` parameter.
   * 
   * - **10**: Canceled.
   * 
   * @example
   * 1
   */
  signStatus?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createDate: 'CreateDate',
      message: 'Message',
      reason: 'Reason',
      requestId: 'RequestId',
      signName: 'SignName',
      signStatus: 'SignStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createDate: 'string',
      message: 'string',
      reason: 'string',
      requestId: 'string',
      signName: 'string',
      signStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

