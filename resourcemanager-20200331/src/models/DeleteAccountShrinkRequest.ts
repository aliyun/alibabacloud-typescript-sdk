// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAccountShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item that you can abandon to continue the member deletion.
   * 
   * You can obtain the ID from the AbandonableChecks response parameter of [GetAccountDeletionCheckResult](https://help.aliyun.com/document_detail/448775.html).
   */
  abandonableCheckIdShrink?: string;
  /**
   * @remarks
   * The ID of the member to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * 169946124551****
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      abandonableCheckIdShrink: 'AbandonableCheckId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonableCheckIdShrink: 'string',
      accountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

