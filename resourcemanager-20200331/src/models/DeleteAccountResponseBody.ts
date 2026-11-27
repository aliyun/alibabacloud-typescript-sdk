// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The deletion type. Valid values:
   * 
   * - 0: Direct deletion. If the member does not have pay-as-you-go resources within the last 30 days, the system directly deletes the member.
   * - 1: Deletion after a cool-down period. If the member has pay-as-you-go resources within the last 30 days, the member enters a cool-down period. The system starts to delete the member only after the cool-down period ends. For more information about the cool-down period, see [What is the cool-down period for member deletion](https://help.aliyun.com/document_detail/446079.html).
   * 
   * @example
   * 0
   */
  deletionType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 009429F8-C1C0-5872-B674-A6C2333B9647
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deletionType: 'DeletionType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionType: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

