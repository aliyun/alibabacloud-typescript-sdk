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

export class DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItems extends $dara.Model {
  hbaItem?: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItemsHbaItem[];
  static names(): { [key: string]: string } {
    return {
      hbaItem: 'HbaItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hbaItem: { 'type': 'array', 'itemType': DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItemsHbaItem },
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

export class DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItemsHbaItem extends $dara.Model {
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
   * md5
   */
  method?: string;
  /**
   * @remarks
   * The value of this parameter varies based on the value of the Method parameter.
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

export class DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItems extends $dara.Model {
  hbaItem?: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItemsHbaItem[];
  static names(): { [key: string]: string } {
    return {
      hbaItem: 'HbaItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hbaItem: { 'type': 'array', 'itemType': DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItemsHbaItem },
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

export class DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItem extends $dara.Model {
  /**
   * @remarks
   * The configurations of the pg_hba.conf file after modification.
   */
  afterHbaItems?: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItems;
  /**
   * @remarks
   * The configurations of the pg_hba.conf file before modification.
   */
  beforeHbaItems?: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItems;
  /**
   * @remarks
   * The status of the modification.
   * 
   * *   **success**: The modification is successful.
   * *   **failed**: The modification failed.
   * *   **setting**: The modification is being applied.
   * 
   * @example
   * success
   */
  modifyStatus?: string;
  /**
   * @remarks
   * The time when the pg_hba.conf file was modified. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-25T06:00:40Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The reason why the modification failed.
   * 
   * @example
   * null
   */
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      afterHbaItems: 'AfterHbaItems',
      beforeHbaItems: 'BeforeHbaItems',
      modifyStatus: 'ModifyStatus',
      modifyTime: 'ModifyTime',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterHbaItems: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItems,
      beforeHbaItems: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItems,
      modifyStatus: 'string',
      modifyTime: 'string',
      statusReason: 'string',
    };
  }

  validate() {
    if(this.afterHbaItems && typeof (this.afterHbaItems as any).validate === 'function') {
      (this.afterHbaItems as any).validate();
    }
    if(this.beforeHbaItems && typeof (this.beforeHbaItems as any).validate === 'function') {
      (this.beforeHbaItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModifyPGHbaConfigLogResponseBodyHbaLogItems extends $dara.Model {
  hbaLogItem?: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItem[];
  static names(): { [key: string]: string } {
    return {
      hbaLogItem: 'HbaLogItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hbaLogItem: { 'type': 'array', 'itemType': DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItem },
    };
  }

  validate() {
    if(Array.isArray(this.hbaLogItem)) {
      $dara.Model.validateArray(this.hbaLogItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModifyPGHbaConfigLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pgm-bp1lymyn1v3i****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * An array that consists of the modifications to the pg_hba.conf file.
   */
  hbaLogItems?: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItems;
  /**
   * @remarks
   * The number of modification records.
   * 
   * @example
   * 1
   */
  logItemCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6D797E6B-E157-510C-A27F-6F9E6DA40633
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      hbaLogItems: 'HbaLogItems',
      logItemCount: 'LogItemCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      hbaLogItems: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItems,
      logItemCount: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.hbaLogItems && typeof (this.hbaLogItems as any).validate === 'function') {
      (this.hbaLogItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

