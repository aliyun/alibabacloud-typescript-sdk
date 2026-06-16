// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyInstanceListInstance extends $dara.Model {
  blackholeThreshold?: number;
  defenseBpsThreshold?: number;
  defensePpsThreshold?: number;
  elasticThreshold?: number;
  instanceId?: string;
  instanceIp?: string;
  instanceName?: string;
  instanceStatus?: string;
  instanceType?: string;
  ipVersion?: string;
  isBgppack?: boolean;
  static names(): { [key: string]: string } {
    return {
      blackholeThreshold: 'BlackholeThreshold',
      defenseBpsThreshold: 'DefenseBpsThreshold',
      defensePpsThreshold: 'DefensePpsThreshold',
      elasticThreshold: 'ElasticThreshold',
      instanceId: 'InstanceId',
      instanceIp: 'InstanceIp',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      ipVersion: 'IpVersion',
      isBgppack: 'IsBgppack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackholeThreshold: 'number',
      defenseBpsThreshold: 'number',
      defensePpsThreshold: 'number',
      elasticThreshold: 'number',
      instanceId: 'string',
      instanceIp: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      ipVersion: 'string',
      isBgppack: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyInstanceList extends $dara.Model {
  instance?: DescribeInstanceResponseBodyInstanceListInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyInstanceListInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBody extends $dara.Model {
  instanceList?: DescribeInstanceResponseBodyInstanceList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C728D7E9-9A39-52E0-966B-5C33118BDBB0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the assets.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      instanceList: 'InstanceList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: DescribeInstanceResponseBodyInstanceList,
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(this.instanceList && typeof (this.instanceList as any).validate === 'function') {
      (this.instanceList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

