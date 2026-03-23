// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePGHbaConfigResponseBodyDefaultHbaItemsHbaItem extends $dara.Model {
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
  DBInstanceId?: string;
  defaultHbaItems?: DescribePGHbaConfigResponseBodyDefaultHbaItems;
  hbaModifyTime?: string;
  lastModifyStatus?: string;
  modifyStatusReason?: string;
  requestId?: string;
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

