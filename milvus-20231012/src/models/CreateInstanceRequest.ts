// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestComponents extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8
   */
  cuNum?: number;
  /**
   * @example
   * general
   */
  cuType?: string;
  diskSizeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  replica?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * standalone
   */
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

export class CreateInstanceRequestTags extends $dara.Model {
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

export class CreateInstanceRequestVSwitchIds extends $dara.Model {
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

export class CreateInstanceRequest extends $dara.Model {
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  autoBackup?: boolean;
  components?: CreateInstanceRequestComponents[];
  configuration?: string;
  /**
   * @example
   * test12
   */
  dbAdminPassword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2.4
   */
  dbVersion?: string;
  encrypted?: boolean;
  /**
   * @example
   * true
   */
  ha?: boolean;
  /**
   * @example
   * milvus-test
   */
  instanceName?: string;
  kmsKeyId?: string;
  multiZoneMode?: string;
  /**
   * @example
   * 1
   */
  paymentDuration?: number;
  /**
   * @example
   * month
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  tags?: CreateInstanceRequestTags[];
  /**
   * @example
   * ["vsw-123xxx"]
   */
  vSwitchIds?: CreateInstanceRequestVSwitchIds[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-123xxx
   */
  vpcId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing-g
   */
  zoneId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      autoBackup: 'autoBackup',
      components: 'components',
      configuration: 'configuration',
      dbAdminPassword: 'dbAdminPassword',
      dbVersion: 'dbVersion',
      encrypted: 'encrypted',
      ha: 'ha',
      instanceName: 'instanceName',
      kmsKeyId: 'kmsKeyId',
      multiZoneMode: 'multiZoneMode',
      paymentDuration: 'paymentDuration',
      paymentDurationUnit: 'paymentDurationUnit',
      paymentType: 'paymentType',
      resourceGroupId: 'resourceGroupId',
      tags: 'tags',
      vSwitchIds: 'vSwitchIds',
      vpcId: 'vpcId',
      zoneId: 'zoneId',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      autoBackup: 'boolean',
      components: { 'type': 'array', 'itemType': CreateInstanceRequestComponents },
      configuration: 'string',
      dbAdminPassword: 'string',
      dbVersion: 'string',
      encrypted: 'boolean',
      ha: 'boolean',
      instanceName: 'string',
      kmsKeyId: 'string',
      multiZoneMode: 'string',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
      paymentType: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateInstanceRequestTags },
      vSwitchIds: { 'type': 'array', 'itemType': CreateInstanceRequestVSwitchIds },
      vpcId: 'string',
      zoneId: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
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

