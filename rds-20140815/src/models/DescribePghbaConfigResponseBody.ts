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

export class DescribePGHbaConfigResponseBodyDefaultHbaItems extends $dara.Model {
  hbaItem?: DescribePGHbaConfigResponseBodyDefaultHbaItemsHbaItem[];
  static names(): { [key: string]: string } {
    return {
      hbaItem: 'HbaItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hbaItem: { 'type': 'array', 'itemType': DescribePGHbaConfigResponseBodyDefaultHbaItemsHbaItem },
    };
  }

  validate() {
    if(Array.isArray(this.hbaItem)) {
      $dara.Model.validateArray(this.hbaItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribePGHbaConfigResponseBodyRunningHbaItems extends $dara.Model {
  hbaItem?: DescribePGHbaConfigResponseBodyRunningHbaItemsHbaItem[];
  static names(): { [key: string]: string } {
    return {
      hbaItem: 'HbaItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hbaItem: { 'type': 'array', 'itemType': DescribePGHbaConfigResponseBodyRunningHbaItemsHbaItem },
    };
  }

  validate() {
    if(Array.isArray(this.hbaItem)) {
      $dara.Model.validateArray(this.hbaItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePGHbaConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-bp1*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The default configuration items of the pg_hba.conf file.
   */
  defaultHbaItems?: DescribePGHbaConfigResponseBodyDefaultHbaItems;
  /**
   * @remarks
   * The time when the previous modification was made to the pg_hba.conf file.
   * 
   * @example
   * 2021-11-25T06:00:40Z
   */
  hbaModifyTime?: string;
  /**
   * @remarks
   * The status of the previous modification to the pg_hba.conf file. Valid values:
   * 
   * *   **success**
   * *   **setting**
   * *   **failed**
   * 
   * @example
   * success
   */
  lastModifyStatus?: string;
  /**
   * @remarks
   * The reason why the previous modification was made to the pg_hba.conf file.
   * 
   * @example
   * The specified users (testuser) is not exist.
   */
  modifyStatusReason?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A147A124-A147-5CCF-9609-B73C028848DF
   */
  requestId?: string;
  /**
   * @remarks
   * The current configuration items of the pg_hba.conf file.
   */
  runningHbaItems?: DescribePGHbaConfigResponseBodyRunningHbaItems;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      defaultHbaItems: 'DefaultHbaItems',
      hbaModifyTime: 'HbaModifyTime',
      lastModifyStatus: 'LastModifyStatus',
      modifyStatusReason: 'ModifyStatusReason',
      requestId: 'RequestId',
      runningHbaItems: 'RunningHbaItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      defaultHbaItems: DescribePGHbaConfigResponseBodyDefaultHbaItems,
      hbaModifyTime: 'string',
      lastModifyStatus: 'string',
      modifyStatusReason: 'string',
      requestId: 'string',
      runningHbaItems: DescribePGHbaConfigResponseBodyRunningHbaItems,
    };
  }

  validate() {
    if(this.defaultHbaItems && typeof (this.defaultHbaItems as any).validate === 'function') {
      (this.defaultHbaItems as any).validate();
    }
    if(this.runningHbaItems && typeof (this.runningHbaItems as any).validate === 'function') {
      (this.runningHbaItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

