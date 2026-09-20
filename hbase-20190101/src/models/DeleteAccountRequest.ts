// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the existing account to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * test01****
   */
  accountName?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

