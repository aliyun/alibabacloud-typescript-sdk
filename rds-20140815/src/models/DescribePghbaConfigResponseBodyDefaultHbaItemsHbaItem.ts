// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePGHbaConfigResponseBodyDefaultHbaItemsHbaItem extends $dara.Model {
  /**
   * @remarks
   * The IP addresses from which the specified users can access the specified databases. The value is fixed as 0.0.0.0/0.
   * 
   * @example
   * 0.0.0.0/0
   */
  address?: string;
  /**
   * @remarks
   * The names of the databases that the specified users are allowed to access. The value is fixed as all or replication.
   * 
   * @example
   * all
   */
  database?: string;
  /**
   * @remarks
   * The mask of the instance. The value is fixed as null.
   * 
   * @example
   * null
   */
  mask?: string;
  /**
   * @remarks
   * The authentication method. The value is fixed as md5.
   * 
   * @example
   * md5
   */
  method?: string;
  /**
   * @remarks
   * The value of this parameter is based on the value of the Method parameter. The value is fixed as null.
   * 
   * @example
   * null
   */
  option?: string;
  /**
   * @remarks
   * The priority of the configuration items in the pg_hba.conf file. This value is automatically generated.
   * 
   * @example
   * 0
   */
  priorityId?: number;
  /**
   * @remarks
   * The type of connection to the instance. The value is fixed as host.
   * 
   * @example
   * host
   */
  type?: string;
  /**
   * @remarks
   * The user that is allowed to access the instance. The value is fixed as all.
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

