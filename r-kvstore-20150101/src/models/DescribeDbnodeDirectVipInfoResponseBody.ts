// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBNodeDirectVipInfoResponseBodyDirectVipInfoVipInfo extends $dara.Model {
  /**
   * @remarks
   * The network type of the security group. Valid values:
   * 
   * *   **vpc**: Virtual Private Cloud (VPC)
   * 
   * @example
   * vpc
   */
  netType?: string;
  /**
   * @remarks
   * The shard ID.
   * 
   * @example
   * r-8vb3679b04551444-db-2
   */
  nodeId?: string;
  /**
   * @remarks
   * The port number. Valid values: **1024** to **65535**. Default value: **6379**.
   * 
   * @example
   * 6379
   */
  port?: string;
  /**
   * @remarks
   * The VIP of the shard.
   * 
   * @example
   * 100.115.61.8
   */
  vip?: string;
  static names(): { [key: string]: string } {
    return {
      netType: 'NetType',
      nodeId: 'NodeId',
      port: 'Port',
      vip: 'Vip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netType: 'string',
      nodeId: 'string',
      port: 'string',
      vip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodeDirectVipInfoResponseBodyDirectVipInfo extends $dara.Model {
  vipInfo?: DescribeDBNodeDirectVipInfoResponseBodyDirectVipInfoVipInfo[];
  static names(): { [key: string]: string } {
    return {
      vipInfo: 'VipInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vipInfo: { 'type': 'array', 'itemType': DescribeDBNodeDirectVipInfoResponseBodyDirectVipInfoVipInfo },
    };
  }

  validate() {
    if(Array.isArray(this.vipInfo)) {
      $dara.Model.validateArray(this.vipInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodeDirectVipInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The VIP information of shards in the cluster instance.
   */
  directVipInfo?: DescribeDBNodeDirectVipInfoResponseBodyDirectVipInfo;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABAF95F6-35C1-4177-AF3A-70969EBD****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      directVipInfo: 'DirectVipInfo',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directVipInfo: DescribeDBNodeDirectVipInfoResponseBodyDirectVipInfo,
      instanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.directVipInfo && typeof (this.directVipInfo as any).validate === 'function') {
      (this.directVipInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

