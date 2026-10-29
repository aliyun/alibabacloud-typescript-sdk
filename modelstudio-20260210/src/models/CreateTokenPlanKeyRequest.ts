// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTokenPlanKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * acc_123456789
   */
  accountId?: string;
  /**
   * @remarks
   * The description of the key.
   * 
   * @example
   * API key description
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

