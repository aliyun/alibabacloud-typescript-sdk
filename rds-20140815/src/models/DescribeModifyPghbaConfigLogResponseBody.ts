// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItemsHbaItem extends $dara.Model {
  address?: string;
  database?: string;
  mask?: string;
  method?: string;
  option?: string;
  priorityId?: number;
  type?: string;
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
  address?: string;
  database?: string;
  mask?: string;
  method?: string;
  option?: string;
  priorityId?: number;
  type?: string;
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
  afterHbaItems?: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItems;
  beforeHbaItems?: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItems;
  modifyStatus?: string;
  modifyTime?: string;
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
  DBInstanceId?: string;
  hbaLogItems?: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItems;
  logItemCount?: number;
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

