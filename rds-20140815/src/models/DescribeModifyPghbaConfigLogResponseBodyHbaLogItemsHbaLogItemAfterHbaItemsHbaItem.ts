// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItemsHbaItem extends $dara.Model {
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 0.0.0.0/0
   */
  address?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * all
   */
  database?: string;
  /**
   * @remarks
   * The mask of the IP address.
   * 
   * @example
   * null
   */
  mask?: string;
  /**
   * @remarks
   * The authentication method.
   * 
   * @example
   * ldap
   */
  method?: string;
  /**
   * @remarks
   * The value of this parameter was set based on the value of the Method parameter.
   * 
   * @example
   * null
   */
  option?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 0
   */
  priorityId?: number;
  /**
   * @remarks
   * The connection type.
   * 
   * @example
   * host
   */
  type?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * ldapuser
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      database: 'Database',
      mask: 'Mask',
      method: 'Method',
      option: 'Option',
      priorityId: 'PriorityId',
      type: 'Type',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      database: 'string',
      mask: 'string',
      method: 'string',
      option: 'string',
      priorityId: 'number',
      type: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

