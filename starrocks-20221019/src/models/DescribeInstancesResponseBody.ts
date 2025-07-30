// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyDataTags extends $dara.Model {
  /**
   * @example
   * k1
   */
  key?: string;
  /**
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class DescribeInstancesResponseBodyDataVSwitches extends $dara.Model {
  /**
   * @example
   * true
   */
  primary?: boolean;
  /**
   * @example
   * vsw-bp1p0mldwx5av55v0xXXX
   */
  vswId?: string;
  /**
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      primary: 'Primary',
      vswId: 'VswId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primary: 'boolean',
      vswId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyData extends $dara.Model {
  /**
   * @example
   * acl-bp1xc6b9vs013jjtp****
   */
  aclId?: string;
  /**
   * @example
   * onECS
   */
  architecture?: string;
  /**
   * @example
   * 1733292921000
   */
  beginTime?: number;
  /**
   * @example
   * true
   */
  enableAutoMinorVersionUpgrade?: boolean;
  /**
   * @example
   * true
   */
  enableSSL?: boolean;
  /**
   * @example
   * true
   */
  enabledAuditLoader?: boolean;
  /**
   * @example
   * true
   */
  encrypted?: boolean;
  /**
   * @example
   * 4889001600000
   */
  expireTime?: number;
  /**
   * @example
   * c-d4be777ff5e8cXXX
   */
  instanceId?: string;
  /**
   * @example
   * sr_test_1
   */
  instanceName?: string;
  /**
   * @example
   * running
   */
  instanceStatus?: string;
  /**
   * @example
   * true
   */
  isolateLeader?: boolean;
  /**
   * @example
   * rewqfds****
   */
  kmsKeyId?: string;
  /**
   * @example
   * 00:00-06:00
   */
  maintainablePeriod?: string;
  /**
   * @example
   * 3.2.11-1.79-1.6.5
   */
  minorVersion?: string;
  /**
   * @example
   * cms
   */
  monitorType?: string;
  /**
   * @example
   * oss://sr-c-****
   */
  ossLocation?: string;
  /**
   * @example
   * official
   */
  packageType?: string;
  /**
   * @example
   * postPaid
   */
  payType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmytyuofb****
   */
  resourceGroupId?: string;
  /**
   * @example
   * shared_nothing
   */
  runMode?: string;
  /**
   * @example
   * 3645445
   */
  runningTime?: number;
  /**
   * @example
   * true
   */
  securityGroupManaged?: boolean;
  /**
   * @example
   * sg-8vbaz2etr66a62b9****
   */
  sgId?: string;
  tags?: DescribeInstancesResponseBodyDataTags[];
  vSwitches?: DescribeInstancesResponseBodyDataVSwitches[];
  /**
   * @example
   * 3.2
   */
  version?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-bp1rbvag1cafkj4prwXXX
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      architecture: 'Architecture',
      beginTime: 'BeginTime',
      enableAutoMinorVersionUpgrade: 'EnableAutoMinorVersionUpgrade',
      enableSSL: 'EnableSSL',
      enabledAuditLoader: 'EnabledAuditLoader',
      encrypted: 'Encrypted',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      isolateLeader: 'IsolateLeader',
      kmsKeyId: 'KmsKeyId',
      maintainablePeriod: 'MaintainablePeriod',
      minorVersion: 'MinorVersion',
      monitorType: 'MonitorType',
      ossLocation: 'OssLocation',
      packageType: 'PackageType',
      payType: 'PayType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      runMode: 'RunMode',
      runningTime: 'RunningTime',
      securityGroupManaged: 'SecurityGroupManaged',
      sgId: 'SgId',
      tags: 'Tags',
      vSwitches: 'VSwitches',
      version: 'Version',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      architecture: 'string',
      beginTime: 'number',
      enableAutoMinorVersionUpgrade: 'boolean',
      enableSSL: 'boolean',
      enabledAuditLoader: 'boolean',
      encrypted: 'boolean',
      expireTime: 'number',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      isolateLeader: 'boolean',
      kmsKeyId: 'string',
      maintainablePeriod: 'string',
      minorVersion: 'string',
      monitorType: 'string',
      ossLocation: 'string',
      packageType: 'string',
      payType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      runMode: 'string',
      runningTime: 'number',
      securityGroupManaged: 'boolean',
      sgId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyDataTags },
      vSwitches: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyDataVSwitches },
      version: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.vSwitches)) {
      $dara.Model.validateArray(this.vSwitches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $dara.Model {
  data?: DescribeInstancesResponseBodyData[];
  /**
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE74XXX
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  /**
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

