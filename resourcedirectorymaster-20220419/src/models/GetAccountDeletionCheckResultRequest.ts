// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountDeletionCheckResultRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 179855839641****
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

