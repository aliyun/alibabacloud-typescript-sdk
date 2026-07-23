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
   * The metadata of the component.
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
   * The metadata of the component.
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
   * The metadata of the component.
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
   * A list of data management configurations.
   */
  dataManagements?: ListInstancesResponseBodyInstancesConfigDataManagements[];
  /**
   * @remarks
   * A list of service engines.
   */
  engines?: ListInstancesResponseBodyInstancesConfigEngines[];
  /**
   * @remarks
   * A list of monitoring components.
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
   * Specifies whether the operating tool is enabled for the instance. Valid values:
   * 
   * - `true`: The tool is enabled.
   * 
   * - `false`: The tool is disabled.
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
   * The billing method of the instance. Only `Subscription` (prepaid) is supported.
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
   * The time when the instance expires.
   * 
   * @example
   * 2022-12-14 00:00:00.0
   */
  expiredTime?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2022-10-13 17:34:52.0
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the instance was last modified.
   * 
   * @example
   * 2022-11-05 09:02:30.0
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
   * The configuration of the operating tool.
   */
  operatingTool?: ListInstancesResponseBodyInstancesOperatingTool;
  /**
   * @remarks
   * The region ID. Valid values:
   * 
   * - `cn-shenzhen`: China (Shenzhen)
   * 
   * - `cn-hangzhou`: China (Hangzhou)
   * 
   * - `cn-beijing`: China (Beijing)
   * 
   * - `cn-shanghai`: China (Shanghai)
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * - `Initializing`: The instance is initializing.
   * 
   * - `Stopped`: The instance is stopped.
   * 
   * - `Running`: The instance is running.
   * 
   * @example
   * Initializing
   */
  status?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - `basic`: Basic Edition
   * 
   * - `high-level`: High-level Edition
   * 
   * - `advanced`: Advanced Edition
   * 
   * - `standard`: Standard Edition
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
   * A list of instances.
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
   * The total number of returned instances.
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

