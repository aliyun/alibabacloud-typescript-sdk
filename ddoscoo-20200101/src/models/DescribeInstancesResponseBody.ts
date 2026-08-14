// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstances extends $dara.Model {
  createTime?: number;
  debtStatus?: number;
  edition?: number;
  enabled?: number;
  expireTime?: number;
  instanceId?: string;
  ip?: string;
  ipMode?: string;
  ipVersion?: string;
  isFirstOpenBw?: number;
  isFirstOpenQps?: number;
  remark?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      debtStatus: 'DebtStatus',
      edition: 'Edition',
      enabled: 'Enabled',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      ip: 'Ip',
      ipMode: 'IpMode',
      ipVersion: 'IpVersion',
      isFirstOpenBw: 'IsFirstOpenBw',
      isFirstOpenQps: 'IsFirstOpenQps',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      debtStatus: 'number',
      edition: 'number',
      enabled: 'number',
      expireTime: 'number',
      instanceId: 'string',
      ip: 'string',
      ipMode: 'string',
      ipVersion: 'string',
      isFirstOpenBw: 'number',
      isFirstOpenQps: 'number',
      remark: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $dara.Model {
  instances?: DescribeInstancesResponseBodyInstances[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

