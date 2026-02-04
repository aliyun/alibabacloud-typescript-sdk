// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceNetInfoResponseBodyNetInfoItemsInstanceNetInfo extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **0**: Internet
   * *   **1**: classic network
   * *   **2**: Virtual Private Cloud (VPC)
   * 
   * @example
   * 1
   */
  DBInstanceNetType?: string;
  /**
   * @remarks
   * Indicates whether the address is a private endpoint. Valid values:
   * 
   * *   **0**: The address is not a private endpoint.
   * *   **1**: The address is a private endpoint.
   * 
   * @example
   * 0
   */
  directConnection?: number;
  /**
   * @remarks
   * The expiration time of the classic network endpoint. Unit: seconds.
   * 
   * @example
   * 5183779
   */
  expiredTime?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 172.16.49.***
   */
  IPAddress?: string;
  /**
   * @remarks
   * The network type of the IP address. Valid values:
   * 
   * *   **Public**: Internet
   * *   **Inner**: classic network
   * *   **Private**: VPC
   * 
   * @example
   * Inner
   */
  IPType?: string;
  /**
   * @remarks
   * Indicates whether the address is the endpoint for the secondary zone. Valid values: 1 and 0. A value of 1 indicates that the address is the endpoint for the secondary zone.
   * 
   * >  This parameter is returned only after you enable the multi-zone read/write splitting architecture for the instance.
   * 
   * @example
   * 1
   */
  isSlaveProxy?: number;
  /**
   * @remarks
   * The service port of the instance.
   * 
   * @example
   * 6379
   */
  port?: string;
  /**
   * @remarks
   * The remaining validity period of the classic network endpoint. Unit: seconds.
   * 
   * >  **A value of 0 indicates that the endpoint never expires.
   * 
   * @example
   * 0
   */
  upgradeable?: string;
  /**
   * @remarks
   * The ID of the VPC to which the instance belongs.
   * 
   * @example
   * vpc-bp1nme44gek34slfc****
   */
  VPCId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * r-bp1ky7j6qc7umk****
   */
  VPCInstanceId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
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
  /**
   * @remarks
   * The network information about the instance.
   */
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

