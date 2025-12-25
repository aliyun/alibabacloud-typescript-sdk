// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceDetailComponents extends $dara.Model {
  cuNum?: number;
  cuType?: string;
  diskSizeType?: string;
  replica?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cuNum: 'cuNum',
      cuType: 'cuType',
      diskSizeType: 'diskSizeType',
      replica: 'replica',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuNum: 'number',
      cuType: 'string',
      diskSizeType: 'string',
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
  key?: string;
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
  vswId?: string;
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
  autoBackup?: boolean;
  components?: InstanceDetailComponents[];
  configuration?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   */
  createTime?: string;
  dbVersion?: string;
  encrypted?: boolean;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   */
  expireTime?: string;
  ha?: boolean;
  instanceId?: string;
  /**
   * @example
   * milvus-test
   */
  instanceName?: string;
  kmsKeyId?: string;
  multiZoneMode?: string;
  orderId?: string;
  paymentType?: string;
  regionId?: string;
  resourceGroupId?: string;
  runningTime?: number;
  securityGroupIds?: string[];
  status?: string;
  tags?: InstanceDetailTags[];
  vSwitchIds?: InstanceDetailVSwitchIds[];
  vpcId?: string;
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

