// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstancesConfigDataManagements extends $dara.Model {
  /**
   * @remarks
   * The component code.
   * 
   * @example
   * storage
   */
  componentCode?: string;
  /**
   * @remarks
   * The metadata.
   */
  meta?: { [key: string]: any };
  /**
   * @remarks
   * The component type.
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

export class ListInstancesResponseBodyInstancesConfigEngines extends $dara.Model {
  /**
   * @remarks
   * The component code.
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
   * The component type.
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

export class ListInstancesResponseBodyInstancesConfigMonitors extends $dara.Model {
  /**
   * @remarks
   * The component code.
   * 
   * @example
   * featuresets
   */
  componentCode?: string;
  /**
   * @remarks
   * The metadata.
   */
  meta?: { [key: string]: any };
  /**
   * @remarks
   * The component type.
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

export class ListInstancesResponseBodyInstancesConfig extends $dara.Model {
  /**
   * @remarks
   * The list of modeling environments.
   */
  dataManagements?: ListInstancesResponseBodyInstancesConfigDataManagements[];
  /**
   * @remarks
   * The list of service engines.
   */
  engines?: ListInstancesResponseBodyInstancesConfigEngines[];
  /**
   * @remarks
   * The list of supporting features.
   */
  monitors?: ListInstancesResponseBodyInstancesConfigMonitors[];
  static names(): { [key: string]: string } {
    return {
      dataManagements: 'DataManagements',
      engines: 'Engines',
      monitors: 'Monitors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataManagements: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesConfigDataManagements },
      engines: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesConfigEngines },
      monitors: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesConfigMonitors },
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

export class ListInstancesResponseBodyInstancesOperatingTool extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the operations tool is enabled for the instance. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
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

export class ListInstancesResponseBodyInstances extends $dara.Model {
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
   * The instance configuration.
   */
  config?: ListInstancesResponseBodyInstancesConfig;
  /**
   * @remarks
   * The instance expiration time. The time follows the ISO 8601 standard and is displayed in the UTC time zone.
   * 
   * @example
   * 2022-12-14T00:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The instance creation time. The time follows the ISO 8601 standard and is displayed in the UTC time zone.
   * 
   * @example
   * 2022-10-13T17:34:52Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The instance update time. The time follows the ISO 8601 standard and is displayed in the UTC time zone.
   * 
   * @example
   * 2022-11-05T09:02:30Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * The configuration related to the operations tool.
   */
  operatingTool?: ListInstancesResponseBodyInstancesOperatingTool;
  /**
   * @remarks
   * The region ID. Valid values:
   * - cn-shenzhen: Shenzhen.
   * - cn-hangzhou: Hangzhou.
   * - cn-beijing: Beijing.
   * - cn-shanghai: Shanghai.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * - Initializing: Initializing.
   * - Stopped: Stopped.
   * - Running: Running.
   * 
   * @example
   * Initializing
   */
  status?: string;
  /**
   * @remarks
   * The instance type. Valid values:
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
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      instanceId: 'InstanceId',
      operatingTool: 'OperatingTool',
      regionId: 'RegionId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      config: ListInstancesResponseBodyInstancesConfig,
      expiredTime: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      instanceId: 'string',
      operatingTool: ListInstancesResponseBodyInstancesOperatingTool,
      regionId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.operatingTool && typeof (this.operatingTool as any).validate === 'function') {
      (this.operatingTool as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance list.
   */
  instances?: ListInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BDB621CB-A81E-5D39-8793-39A365CBCC74
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of items in the list.
   * 
   * @example
   * 7
   */
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
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
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

