// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstancesConfigDataManagements extends $dara.Model {
  /**
   * @example
   * storage
   */
  componentCode?: string;
  meta?: { [key: string]: any };
  /**
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
   * @example
   * feature
   */
  componentCode?: string;
  meta?: { [key: string]: any };
  /**
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
   * @example
   * featuresets
   */
  componentCode?: string;
  meta?: { [key: string]: any };
  /**
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
  dataManagements?: ListInstancesResponseBodyInstancesConfigDataManagements[];
  engines?: ListInstancesResponseBodyInstancesConfigEngines[];
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
   * @example
   * Subscription
   */
  chargeType?: string;
  /**
   * @example
   * airec_developers_public_cn
   */
  commodityCode?: string;
  config?: ListInstancesResponseBodyInstancesConfig;
  /**
   * @example
   * 2022-12-14 00:00:00.0
   */
  expiredTime?: string;
  /**
   * @example
   * 2022-10-13 17:34:52.0
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2022-11-05 09:02:30.0
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * pairec-test1
   */
  instanceId?: string;
  operatingTool?: ListInstancesResponseBodyInstancesOperatingTool;
  /**
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @example
   * Initializing
   */
  status?: string;
  /**
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
  instances?: ListInstancesResponseBodyInstances[];
  /**
   * @example
   * BDB621CB-A81E-5D39-8793-39A365CBCC74
   */
  requestId?: string;
  /**
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

