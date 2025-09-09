// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the member account.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The description of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS for PostgreSQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      description: 'Description',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      description: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

