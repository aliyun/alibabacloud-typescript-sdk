// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the check items that you can choose to ignore for the member deletion.
   * 
   * You can obtain the IDs from the response of the [GetAccountDeletionCheckResult](~~GetAccountDeletionCheckResult~~) operation.
   */
  abandonableCheckId?: string[];
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 169946124551****
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      abandonableCheckId: 'AbandonableCheckId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonableCheckId: { 'type': 'array', 'itemType': 'string' },
      accountId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.abandonableCheckId)) {
      $dara.Model.validateArray(this.abandonableCheckId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

