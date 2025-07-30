// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateInstanceV1RequestBackendNodeGroups extends $dara.Model {
  /**
   * @example
   * 8
   */
  cu?: number;
  /**
   * @example
   * 1
   * 
   * **if can be null:**
   * false
   */
  diskNumber?: number;
  /**
   * @example
   * local_ssd_4_4xlarge
   */
  localStorageInstanceType?: string;
  /**
   * @example
   * 3
   */
  residentNodeNumber?: number;
  /**
   * @example
   * standard
   */
  specType?: string;
  /**
   * @example
   * pl1
   */
  storagePerformanceLevel?: string;
  /**
   * @example
   * 100
   */
  storageSize?: number;
  /**
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
      diskNumber: 'diskNumber',
      localStorageInstanceType: 'localStorageInstanceType',
      residentNodeNumber: 'residentNodeNumber',
      specType: 'specType',
      storagePerformanceLevel: 'storagePerformanceLevel',
      storageSize: 'storageSize',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      diskNumber: 'number',
      localStorageInstanceType: 'string',
      residentNodeNumber: 'number',
      specType: 'string',
      storagePerformanceLevel: 'string',
      storageSize: 'number',
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

export class CreateInstanceV1RequestFrontendNodeGroups extends $dara.Model {
  /**
   * @example
   * 8
   */
  cu?: number;
  /**
   * @example
   * 1
   */
  diskNumber?: number;
  /**
   * @example
   * null
   */
  localStorageInstanceType?: string;
  /**
   * @example
   * 3
   */
  residentNodeNumber?: number;
  /**
   * @example
   * standard
   */
  specType?: string;
  /**
   * @example
   * pl1
   */
  storagePerformanceLevel?: string;
  /**
   * @example
   * 100
   */
  storageSize?: number;
  /**
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
      diskNumber: 'diskNumber',
      localStorageInstanceType: 'localStorageInstanceType',
      residentNodeNumber: 'residentNodeNumber',
      specType: 'specType',
      storagePerformanceLevel: 'storagePerformanceLevel',
      storageSize: 'storageSize',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      diskNumber: 'number',
      localStorageInstanceType: 'string',
      residentNodeNumber: 'number',
      specType: 'string',
      storagePerformanceLevel: 'string',
      storageSize: 'number',
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

export class CreateInstanceV1RequestObserverNodeGroups extends $dara.Model {
  /**
   * @example
   * 8
   */
  cu?: number;
  /**
   * @example
   * 1
   */
  diskNumber?: number;
  /**
   * @example
   * null
   */
  localStorageInstanceType?: string;
  /**
   * @example
   * 3
   */
  residentNodeNumber?: number;
  /**
   * @example
   * standard
   */
  specType?: string;
  /**
   * @example
   * pl1
   */
  storagePerformanceLevel?: string;
  /**
   * @example
   * 100
   */
  storageSize?: number;
  /**
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
      diskNumber: 'diskNumber',
      localStorageInstanceType: 'localStorageInstanceType',
      residentNodeNumber: 'residentNodeNumber',
      specType: 'specType',
      storagePerformanceLevel: 'storagePerformanceLevel',
      storageSize: 'storageSize',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      diskNumber: 'number',
      localStorageInstanceType: 'string',
      residentNodeNumber: 'number',
      specType: 'string',
      storagePerformanceLevel: 'string',
      storageSize: 'number',
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

export class CreateInstanceV1RequestTags extends $dara.Model {
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

export class CreateInstanceV1RequestVSwitches extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-bp19mlh98tm9teyyd****
   */
  vswId?: string;
  /**
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vswId: 'VswId',
      zoneId: 'ZoneId',
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

export class CreateInstanceV1Request extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * password_example
   */
  adminPassword?: string;
  /**
   * @example
   * true
   */
  autoRenew?: boolean;
  backendNodeGroups?: CreateInstanceV1RequestBackendNodeGroups[];
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * true
   */
  encrypted?: boolean;
  frontendNodeGroups?: CreateInstanceV1RequestFrontendNodeGroups[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c1
   */
  instanceName?: string;
  /**
   * @example
   * fdsdf****
   */
  kmsKeyId?: string;
  observerNodeGroups?: CreateInstanceV1RequestObserverNodeGroups[];
  /**
   * @example
   * AliyunEMRStarRocksAccessingOSSRole
   */
  ossAccessingRoleName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * official
   */
  packageType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * prePaid
   */
  payType?: string;
  /**
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @example
   * 165445235634
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-aekzllkih7jqxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * shared_data
   */
  runMode?: string;
  tags?: CreateInstanceV1RequestTags[];
  vSwitches?: CreateInstanceV1RequestVSwitches[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  version?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1fll2mci6d7pw8m****
   */
  vpcId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      adminPassword: 'AdminPassword',
      autoRenew: 'AutoRenew',
      backendNodeGroups: 'BackendNodeGroups',
      clientToken: 'ClientToken',
      duration: 'Duration',
      encrypted: 'Encrypted',
      frontendNodeGroups: 'FrontendNodeGroups',
      instanceName: 'InstanceName',
      kmsKeyId: 'KmsKeyId',
      observerNodeGroups: 'ObserverNodeGroups',
      ossAccessingRoleName: 'OssAccessingRoleName',
      packageType: 'PackageType',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      promotionOptionNo: 'PromotionOptionNo',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      runMode: 'RunMode',
      tags: 'Tags',
      vSwitches: 'VSwitches',
      version: 'Version',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminPassword: 'string',
      autoRenew: 'boolean',
      backendNodeGroups: { 'type': 'array', 'itemType': CreateInstanceV1RequestBackendNodeGroups },
      clientToken: 'string',
      duration: 'number',
      encrypted: 'boolean',
      frontendNodeGroups: { 'type': 'array', 'itemType': CreateInstanceV1RequestFrontendNodeGroups },
      instanceName: 'string',
      kmsKeyId: 'string',
      observerNodeGroups: { 'type': 'array', 'itemType': CreateInstanceV1RequestObserverNodeGroups },
      ossAccessingRoleName: 'string',
      packageType: 'string',
      payType: 'string',
      pricingCycle: 'string',
      promotionOptionNo: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      runMode: 'string',
      tags: { 'type': 'array', 'itemType': CreateInstanceV1RequestTags },
      vSwitches: { 'type': 'array', 'itemType': CreateInstanceV1RequestVSwitches },
      version: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.backendNodeGroups)) {
      $dara.Model.validateArray(this.backendNodeGroups);
    }
    if(Array.isArray(this.frontendNodeGroups)) {
      $dara.Model.validateArray(this.frontendNodeGroups);
    }
    if(Array.isArray(this.observerNodeGroups)) {
      $dara.Model.validateArray(this.observerNodeGroups);
    }
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

