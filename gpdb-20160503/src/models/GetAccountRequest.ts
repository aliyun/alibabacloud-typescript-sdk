// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the initial account. The name must meet the following requirements:
   * 
   * - The name can contain lowercase letters, digits, and underscores (_).
   * - The name must start with a lowercase letter and end with a lowercase letter or digit.
   * - The name cannot start with gp.
   * - The name must be 2 to 16 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testuser
   */
  accountName?: string;
  /**
   * @remarks
   * The instance ID.
   * >You can specify up to 30 instance IDs for batch operations. Separate multiple instance IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

