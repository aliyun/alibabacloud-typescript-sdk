// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrsAddr extends $dara.Model {
  /**
   * @remarks
   * The address ID.
   * 
   * @example
   * 739
   */
  id?: number;
  /**
   * @remarks
   * The address mode.
   * 
   * @example
   * OFFLINE
   */
  mode?: string;
  /**
   * @remarks
   * The address.
   * 
   * @example
   * 1.1.1.1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      mode: 'Mode',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      mode: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrs extends $dara.Model {
  addr?: DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrsAddr[];
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: { 'type': 'array', 'itemType': DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrsAddr },
    };
  }

  validate() {
    if(Array.isArray(this.addr)) {
      $dara.Model.validateArray(this.addr);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPool extends $dara.Model {
  /**
   * @remarks
   * The address pool ID.
   * 
   * @example
   * hra0oq
   */
  addrPoolId?: string;
  /**
   * @remarks
   * The address pool name.
   */
  addrPoolName?: string;
  addrs?: DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrs;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * instance-zwy-38
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      addrPoolId: 'AddrPoolId',
      addrPoolName: 'AddrPoolName',
      addrs: 'Addrs',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPoolId: 'string',
      addrPoolName: 'string',
      addrs: DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrs,
      instanceId: 'string',
    };
  }

  validate() {
    if(this.addrs && typeof (this.addrs as any).validate === 'function') {
      (this.addrs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanResponseBodyFaultAddrPools extends $dara.Model {
  faultAddrPool?: DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPool[];
  static names(): { [key: string]: string } {
    return {
      faultAddrPool: 'FaultAddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultAddrPool: { 'type': 'array', 'itemType': DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPool },
    };
  }

  validate() {
    if(Array.isArray(this.faultAddrPool)) {
      $dara.Model.validateArray(this.faultAddrPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the disaster recovery plan was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-08-11T05:04Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the disaster recovery plan was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1565499867000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The number of faulty address pools.
   * 
   * @example
   * 2
   */
  faultAddrPoolNum?: number;
  /**
   * @remarks
   * The faulty address pools.
   */
  faultAddrPools?: DescribeGtmRecoveryPlanResponseBodyFaultAddrPools;
  /**
   * @remarks
   * The time when the disaster recovery plan was last executed. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-08-11T05:04Z
   */
  lastExecuteTime?: string;
  /**
   * @remarks
   * The time when the disaster recovery plan was last executed. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1565505898000
   */
  lastExecuteTimestamp?: number;
  /**
   * @remarks
   * The time when the disaster recovery plan was last rolled back. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 2019-08-11T06:45Z
   */
  lastRollbackTime?: string;
  /**
   * @remarks
   * The time when the disaster recovery plan was last rolled back. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1565505919000
   */
  lastRollbackTimestamp?: number;
  /**
   * @remarks
   * The name of the disaster recovery plan.
   * 
   * @example
   * name-example
   */
  name?: string;
  /**
   * @remarks
   * The ID of the disaster recovery plan.
   * 
   * @example
   * 55
   */
  recoveryPlanId?: number;
  /**
   * @remarks
   * The description of the disaster recovery plan.
   * 
   * @example
   * remark-example
   */
  remark?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A5F4315-D6E8-435E-82DF-24F4C97D6999
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the disaster recovery plan.
   * 
   * @example
   * UNEXECUTED
   */
  status?: string;
  /**
   * @remarks
   * The time when the disaster recovery plan was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-08-11T06:45Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the disaster recovery plan was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1565499867000
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      faultAddrPoolNum: 'FaultAddrPoolNum',
      faultAddrPools: 'FaultAddrPools',
      lastExecuteTime: 'LastExecuteTime',
      lastExecuteTimestamp: 'LastExecuteTimestamp',
      lastRollbackTime: 'LastRollbackTime',
      lastRollbackTimestamp: 'LastRollbackTimestamp',
      name: 'Name',
      recoveryPlanId: 'RecoveryPlanId',
      remark: 'Remark',
      requestId: 'RequestId',
      status: 'Status',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      faultAddrPoolNum: 'number',
      faultAddrPools: DescribeGtmRecoveryPlanResponseBodyFaultAddrPools,
      lastExecuteTime: 'string',
      lastExecuteTimestamp: 'number',
      lastRollbackTime: 'string',
      lastRollbackTimestamp: 'number',
      name: 'string',
      recoveryPlanId: 'number',
      remark: 'string',
      requestId: 'string',
      status: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.faultAddrPools && typeof (this.faultAddrPools as any).validate === 'function') {
      (this.faultAddrPools as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

