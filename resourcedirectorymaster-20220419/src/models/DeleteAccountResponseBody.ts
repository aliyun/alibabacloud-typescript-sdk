// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the deletion. Valid values:
   * 
   * *   0: direct deletion. If the member does not have pay-as-you-go resources that are purchased within the previous 30 days, the system directly deletes the member.
   * *   1: deletion with a silence period. If the member has pay-as-you-go resources that are purchased within the previous 30 days, the member enters a silence period. The system starts to delete the member until the silence period ends. For more information about the silence period, see [What is the silence period for member deletion?](https://help.aliyun.com/document_detail/446079.html)
   * 
   * @example
   * 0
   */
  deletionType?: string;
  /**
   * @remarks
   * The ID of the request.
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

