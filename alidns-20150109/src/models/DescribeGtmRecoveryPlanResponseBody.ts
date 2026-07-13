// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrsAddr extends $dara.Model {
  id?: number;
  mode?: string;
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
  addrPoolId?: string;
  addrPoolName?: string;
  addrs?: DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrs;
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
   * The time when the disaster recovery plan was created.
   * 
   * @example
   * 2019-08-11T05:04Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the disaster recovery plan was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1565499867000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The number of abnormal address pools.
   * 
   * @example
   * 2
   */
  faultAddrPoolNum?: number;
  faultAddrPools?: DescribeGtmRecoveryPlanResponseBodyFaultAddrPools;
  /**
   * @remarks
   * The time when the disaster recovery plan was last executed.
   * 
   * @example
   * 2019-08-11T05:04Z
   */
  lastExecuteTime?: string;
  /**
   * @remarks
   * The time when the disaster recovery plan was last executed. This value is a UNIX timestamp.
   * 
   * @example
   * 1565505898000
   */
  lastExecuteTimestamp?: number;
  /**
   * @remarks
   * The time when the disaster recovery plan was last rolled back. The value is a string that represents a UNIX timestamp.
   * 
   * @example
   * 1565505919000
   */
  lastRollbackTime?: string;
  /**
   * @remarks
   * The time when the disaster recovery plan was last rolled back. This value is a UNIX timestamp.
   * 
   * @example
   * 1565505898000
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
   * 10****
   */
  recoveryPlanId?: number;
  /**
   * @remarks
   * The remarks.
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
   * The status of the disaster recovery plan:
   * 
   * - UNEXECUTED: The disaster recovery plan is not executed.
   * 
   * - EXECUTED: The disaster recovery plan is being executed.
   * 
   * - ROLLED_BACK: The disaster recovery plan is being rolled back.
   * 
   * @example
   * UNEXECUTED
   */
  status?: string;
  /**
   * @remarks
   * The time when the disaster recovery plan was last updated.
   * 
   * @example
   * 2024-03-29T13:20Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the disaster recovery plan was last updated. This value is a UNIX timestamp.
   * 
   * @example
   * 1565505898000
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

