// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyConfigDataManagements extends $dara.Model {
  /**
   * @remarks
   * The code of the component.
   * 
   * @example
   * storage
   */
  componentCode?: string;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * ""
   */
  meta?: { [key: string]: any };
  /**
   * @remarks
   * The type of the component.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      componentCode: 'ComponentCode',
      meta: 'Meta',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCode: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyConfigEngines extends $dara.Model {
  /**
   * @remarks
   * The code of the component.
   * 
   * @example
   * feature
   */
  componentCode?: string;
  /**
   * @remarks
   * The metadata.
   */
  meta?: { [key: string]: any };
  /**
   * @remarks
   * The type of the component.
   * 
   * @example
   * Hologres
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      componentCode: 'ComponentCode',
      meta: 'Meta',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCode: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyConfigMonitors extends $dara.Model {
  /**
   * @remarks
   * The code of the component.
   * 
   * @example
   * featuresets
   */
  componentCode?: string;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * ""
   */
  meta?: { [key: string]: any };
  /**
   * @remarks
   * The type of the component.
   * 
   * @example
   * Platform
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      componentCode: 'ComponentCode',
      meta: 'Meta',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCode: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * The modeling environments.
   */
  dataManagements?: GetInstanceResponseBodyConfigDataManagements[];
  /**
   * @remarks
   * The service engines.
   */
  engines?: GetInstanceResponseBodyConfigEngines[];
  /**
   * @remarks
   * The supporting features.
   */
  monitors?: GetInstanceResponseBodyConfigMonitors[];
  static names(): { [key: string]: string } {
    return {
      dataManagements: 'DataManagements',
      engines: 'Engines',
      monitors: 'Monitors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataManagements: { 'type': 'array', 'itemType': GetInstanceResponseBodyConfigDataManagements },
      engines: { 'type': 'array', 'itemType': GetInstanceResponseBodyConfigEngines },
      monitors: { 'type': 'array', 'itemType': GetInstanceResponseBodyConfigMonitors },
    };
  }

  validate() {
    if(Array.isArray(this.dataManagements)) {
      $dara.Model.validateArray(this.dataManagements);
    }
    if(Array.isArray(this.engines)) {
      $dara.Model.validateArray(this.engines);
    }
    if(Array.isArray(this.monitors)) {
      $dara.Model.validateArray(this.monitors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyFeatureStoreInfo extends $dara.Model {
  /**
   * @remarks
   * The status of FeatureDB.
   * 
   * @example
   * ""
   */
  featureDBStatus?: string;
  /**
   * @remarks
   * The ID of the Feature Store instance.
   * 
   * @example
   * learn-pairec-xxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      featureDBStatus: 'FeatureDBStatus',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureDBStatus: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyOperatingTool extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the operations tool is enabled for the instance. Valid values:
   * - True: Enabled.
   * - False: Disabled.
   * 
   * @example
   * True
   */
  isEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      isEnable: 'IsEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEnable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyRecommendCustomization extends $dara.Model {
  /**
   * @remarks
   * Specifies whether recommendation customization is enabled.
   * 
   * @example
   * false
   */
  isEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      isEnable: 'IsEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEnable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The billing method of the instance. Only subscription is supported.
   * 
   * @example
   * Subscription
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code of the instance.
   * 
   * @example
   * airec_developers_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The configuration of the instance.
   */
  config?: GetInstanceResponseBodyConfig;
  /**
   * @remarks
   * The time when the instance expires. The time follows the ISO 8601 standard and is displayed in UTC.
   * 
   * @example
   * 2022-12-14T00:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The Feature Store information.
   */
  featureStoreInfo?: GetInstanceResponseBodyFeatureStoreInfo;
  /**
   * @remarks
   * The time when the instance was created. The time follows the ISO 8601 standard and is displayed in UTC.
   * 
   * @example
   * 2022-10-13T04:55:12Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the instance was updated. The time follows the ISO 8601 standard and is displayed in UTC.
   * 
   * @example
   * 2022-11-05T09:02:30Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * The configurations related to the operations tool.
   */
  operatingTool?: GetInstanceResponseBodyOperatingTool;
  /**
   * @remarks
   * The recommendation customization configurations.
   */
  recommendCustomization?: GetInstanceResponseBodyRecommendCustomization;
  /**
   * @remarks
   * The region ID. Valid values:
   * - cn-shenzhen: Shenzhen
   * - cn-hangzhou: Hangzhou
   * - cn-beijing: Beijing
   * - cn-shanghai: Shanghai
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * - Initializing: Initialization.
   * - Stopped: The service is stopped.
   * - Running: The instance is running.
   * 
   * @example
   * Initializing
   */
  status?: string;
  /**
   * @remarks
   * The type of the instance. Valid values:
   * - basic: Basic Edition.
   * - highleve: Upgraded Edition.
   * - advance: Advanced Edition.
   * - standard: Standard Edition.
   * 
   * @example
   * basic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      config: 'Config',
      expiredTime: 'ExpiredTime',
      featureStoreInfo: 'FeatureStoreInfo',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      instanceId: 'InstanceId',
      operatingTool: 'OperatingTool',
      recommendCustomization: 'RecommendCustomization',
      regionId: 'RegionId',
      requestId: 'RequestId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      config: GetInstanceResponseBodyConfig,
      expiredTime: 'string',
      featureStoreInfo: GetInstanceResponseBodyFeatureStoreInfo,
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      instanceId: 'string',
      operatingTool: GetInstanceResponseBodyOperatingTool,
      recommendCustomization: GetInstanceResponseBodyRecommendCustomization,
      regionId: 'string',
      requestId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.featureStoreInfo && typeof (this.featureStoreInfo as any).validate === 'function') {
      (this.featureStoreInfo as any).validate();
    }
    if(this.operatingTool && typeof (this.operatingTool as any).validate === 'function') {
      (this.operatingTool as any).validate();
    }
    if(this.recommendCustomization && typeof (this.recommendCustomization as any).validate === 'function') {
      (this.recommendCustomization as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

