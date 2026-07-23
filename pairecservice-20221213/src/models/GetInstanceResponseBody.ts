// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyConfigDataManagements extends $dara.Model {
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

export class GetInstanceResponseBodyConfigEngines extends $dara.Model {
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

export class GetInstanceResponseBodyConfigMonitors extends $dara.Model {
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

export class GetInstanceResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * The list of modeling environments.
   */
  dataManagements?: GetInstanceResponseBodyConfigDataManagements[];
  /**
   * @remarks
   * The list of service engines.
   */
  engines?: GetInstanceResponseBodyConfigEngines[];
  /**
   * @remarks
   * The list of monitoring components.
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

export class GetInstanceResponseBodyOperatingTool extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the operating tool is enabled for the instance. Valid values:
   * 
   * - True: Enabled
   * 
   * - False: Disabled
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

export class GetInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The billing method of the instance. The value is fixed as Subscription.
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
   * The instance configurations.
   */
  config?: GetInstanceResponseBodyConfig;
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
   * The time when the instance was last updated.
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
   * The operating tool configurations.
   */
  operatingTool?: GetInstanceResponseBodyOperatingTool;
  /**
   * @remarks
   * The region ID. Valid values:<br>● cn-shenzhen: Shenzhen<br>● cn-hangzhou: Hangzhou<br>● cn-beijing: Beijing<br>● cn-shanghai: Shanghai<br><br><br><br>
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The instance status. Valid values:<br>● Initializing<br>● Stopped<br>● Running<br><br><br>
   * 
   * @example
   * Initializing
   */
  status?: string;
  /**
   * @remarks
   * The instance type. Valid values:<br>● basic: Basic<br>● highlevel: High-level<br>● advanced: Advanced<br>● standard: Standard<br><br><br><br>
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
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      instanceId: 'string',
      operatingTool: GetInstanceResponseBodyOperatingTool,
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
    if(this.operatingTool && typeof (this.operatingTool as any).validate === 'function') {
      (this.operatingTool as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

