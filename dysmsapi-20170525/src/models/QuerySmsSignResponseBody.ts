// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsSignResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   Other values indicate that the request fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The date and time when the signature was created.
   * 
   * @example
   * 2019-01-08 16:44:13
   */
  createDate?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The remarks of the review. Valid values:
   * 
   * *   If the signature is in the **Approved** or **Pending Approval** state, No Remarks is returned.
   * *   If the signature is in the **Not Approved** state, the reason why the signature is rejected is returned.
   * 
   * @example
   * The document cannot verify the authenticity of the information. Please upload it again.
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
   * The signature.
   * 
   * @example
   * Aliyun
   */
  signName?: string;
  /**
   * @remarks
   * The status of the signature. Valid values:
   * 
   * *   **0**: The signature is pending approval.
   * *   **1**: The signature is approved.
   * *   **2**: The signature is rejected. The Reason parameter indicates the reason why the signature is rejected.
   * *   **10**: The signature is cancelled.
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

