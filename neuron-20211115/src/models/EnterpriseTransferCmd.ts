// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseTransferCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 121321412341
   */
  accountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

