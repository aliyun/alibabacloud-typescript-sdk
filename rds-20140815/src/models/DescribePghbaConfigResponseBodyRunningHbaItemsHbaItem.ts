// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePGHbaConfigResponseBodyRunningHbaItemsHbaItem extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
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
   * md5
   */
  method?: string;
  /**
   * @remarks
   * The value of this parameter varies based on the value of the Method parameter. The value is fixed as null.
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
   * 3
   */
  priorityId?: number;
  /**
   * @remarks
   * The connection type. Valor:
   * 
   * *   **host**: The record matches TCP/IP connections, including SSL connections and non-SSL connections.
   * *   **hostssl**: The record matches only TCP/IP connections that are established over SSL.
   * *   **hostnossl**: The record matches only TCP/IP connections that are not established over SSL connections.
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
   * all
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

