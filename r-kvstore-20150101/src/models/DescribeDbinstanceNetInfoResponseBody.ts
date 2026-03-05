// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceNetInfoResponseBodyNetInfoItemsInstanceNetInfo extends $dara.Model {
  connectionString?: string;
  DBInstanceNetType?: string;
  directConnection?: number;
  expiredTime?: string;
  IPAddress?: string;
  IPType?: string;
  isSlaveProxy?: number;
  port?: string;
  upgradeable?: string;
  VPCId?: string;
  VPCInstanceId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceNetType: 'DBInstanceNetType',
      directConnection: 'DirectConnection',
      expiredTime: 'ExpiredTime',
      IPAddress: 'IPAddress',
      IPType: 'IPType',
      isSlaveProxy: 'IsSlaveProxy',
      port: 'Port',
      upgradeable: 'Upgradeable',
      VPCId: 'VPCId',
      VPCInstanceId: 'VPCInstanceId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceNetType: 'string',
      directConnection: 'number',
      expiredTime: 'string',
      IPAddress: 'string',
      IPType: 'string',
      isSlaveProxy: 'number',
      port: 'string',
      upgradeable: 'string',
      VPCId: 'string',
      VPCInstanceId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyNetInfoItems extends $dara.Model {
  instanceNetInfo?: DescribeDBInstanceNetInfoResponseBodyNetInfoItemsInstanceNetInfo[];
  static names(): { [key: string]: string } {
    return {
      instanceNetInfo: 'InstanceNetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceNetInfo: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyNetInfoItemsInstanceNetInfo },
    };
  }

  validate() {
    if(Array.isArray(this.instanceNetInfo)) {
      $dara.Model.validateArray(this.instanceNetInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   **CLASSIC**: The instance runs in a classic network.
   * *   **VPC**: The instance runs in a virtual private cloud (VPC).
   * 
   * @example
   * CLASSIC
   */
  instanceNetworkType?: string;
  netInfoItems?: DescribeDBInstanceNetInfoResponseBodyNetInfoItems;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FC77D4E1-2A7C-4F0B-A4CC-CE0B9C314B9B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceNetworkType: 'InstanceNetworkType',
      netInfoItems: 'NetInfoItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceNetworkType: 'string',
      netInfoItems: DescribeDBInstanceNetInfoResponseBodyNetInfoItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.netInfoItems && typeof (this.netInfoItems as any).validate === 'function') {
      (this.netInfoItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

