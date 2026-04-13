// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceDetailComponents extends $dara.Model {
  /**
   * @example
   * 4
   */
  cuNum?: number;
  /**
   * @example
   * general
   */
  cuType?: string;
  /**
   * @example
   * Normal
   */
  diskSizeType?: string;
  payType?: string;
  /**
   * @example
   * 1
   */
  replica?: number;
  /**
   * @example
   * data
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cuNum: 'cuNum',
      cuType: 'cuType',
      diskSizeType: 'diskSizeType',
      payType: 'payType',
      replica: 'replica',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuNum: 'number',
      cuType: 'string',
      diskSizeType: 'string',
      payType: 'string',
      replica: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceDetailTags extends $dara.Model {
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
      key: 'key',
      value: 'value',
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

export class InstanceDetailVSwitchIds extends $dara.Model {
  /**
   * @example
   * vsw-xxx
   */
  vswId?: string;
  /**
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vswId: 'vswId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class InstanceDetail extends $dara.Model {
  /**
   * @example
   * true
   */
  autoBackup?: boolean;
  components?: InstanceDetailComponents[];
  /**
   * @example
   * rootCoord:
   *     maxDatabaseNum: 64 # Maximum number of database
   *     maxPartitionNum: 4096
   */
  configuration?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-04-27T02:04:25Z
   */
  createTime?: string;
  /**
   * @example
   * 2.5
   */
  dbVersion?: string;
  /**
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-04-27T02:04:25Z
   */
  expireTime?: string;
  /**
   * @example
   * true
   */
  ha?: boolean;
  /**
   * @example
   * c-xxx
   */
  instanceId?: string;
  /**
   * @example
   * milvus-test
   */
  instanceName?: string;
  /**
   * @remarks
   * kms key Id。
   * 
   * @example
   * key-xxx
   */
  kmsKeyId?: string;
  /**
   * @example
   * Single
   */
  multiZoneMode?: string;
  /**
   * @example
   * 4751
   */
  orderId?: string;
  /**
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * rg-aek3dcgyq7pnqwa
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1
   */
  runningTime?: number;
  securityGroupIds?: string[];
  /**
   * @example
   * running
   */
  status?: string;
  tags?: InstanceDetailTags[];
  vSwitchIds?: InstanceDetailVSwitchIds[];
  /**
   * @example
   * vpc-xxx
   */
  vpcId?: string;
  /**
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoBackup: 'autoBackup',
      components: 'components',
      configuration: 'configuration',
      createTime: 'createTime',
      dbVersion: 'dbVersion',
      encrypted: 'encrypted',
      expireTime: 'expireTime',
      ha: 'ha',
      instanceId: 'instanceId',
      instanceName: 'instanceName',
      kmsKeyId: 'kmsKeyId',
      multiZoneMode: 'multiZoneMode',
      orderId: 'orderId',
      paymentType: 'paymentType',
      regionId: 'regionId',
      resourceGroupId: 'resourceGroupId',
      runningTime: 'runningTime',
      securityGroupIds: 'securityGroupIds',
      status: 'status',
      tags: 'tags',
      vSwitchIds: 'vSwitchIds',
      vpcId: 'vpcId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBackup: 'boolean',
      components: { 'type': 'array', 'itemType': InstanceDetailComponents },
      configuration: 'string',
      createTime: 'string',
      dbVersion: 'string',
      encrypted: 'boolean',
      expireTime: 'string',
      ha: 'boolean',
      instanceId: 'string',
      instanceName: 'string',
      kmsKeyId: 'string',
      multiZoneMode: 'string',
      orderId: 'string',
      paymentType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      runningTime: 'number',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tags: { 'type': 'array', 'itemType': InstanceDetailTags },
      vSwitchIds: { 'type': 'array', 'itemType': InstanceDetailVSwitchIds },
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

