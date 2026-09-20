// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceRequestComponentsDataDisk extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the QueryNode data cloud disk.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ESSD performance level (PL). Valid values: PL0, PL1, PL2, and PL3. If StorageClass is not specified, this field is used for parsing.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The data cloud disk capacity. Unit: GiB.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * The StorageClass of the data cloud disk. Valid values: alicloud-disk-essd-pl0, alicloud-disk-essd-pl1, alicloud-disk-essd-pl2, and alicloud-disk-essd-pl3.
   * 
   * @example
   * alicloud-disk-essd-pl1
   */
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      performanceLevel: 'performanceLevel',
      size: 'size',
      storageClass: 'storageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      performanceLevel: 'string',
      size: 'number',
      storageClass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestComponents extends $dara.Model {
  /**
   * @remarks
   * The number of compute units (CUs).
   * 
   * This parameter is required.
   * 
   * @example
   * 8
   */
  cuNum?: number;
  /**
   * @remarks
   * The CU type. general indicates a 1:4 ratio, and ram indicates a 1:8 ratio.
   * 
   * @example
   * general
   */
  cuType?: string;
  /**
   * @remarks
   * The QueryNode data cloud disk configuration. This parameter is supported only when type is set to query.
   */
  dataDisk?: UpdateInstanceRequestComponentsDataDisk;
  payType?: string;
  /**
   * @remarks
   * The number of replicas.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  replica?: number;
  /**
   * @remarks
   * The component type.
   * 
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
      dataDisk: 'dataDisk',
      payType: 'payType',
      replica: 'replica',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuNum: 'number',
      cuType: 'string',
      dataDisk: UpdateInstanceRequestComponentsDataDisk,
      payType: 'string',
      replica: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.dataDisk && typeof (this.dataDisk as any).validate === 'function') {
      (this.dataDisk as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic backup.
   * 
   * @example
   * true
   */
  autoBackup?: boolean;
  autoPay?: boolean;
  /**
   * @remarks
   * The component information.
   */
  components?: UpdateInstanceRequestComponents[];
  /**
   * @remarks
   * The configuration information.
   * 
   * @example
   * rootCoord:\\n  maxDatabaseNum: 64
   */
  configuration?: string;
  /**
   * @remarks
   * Specifies whether to enable high availability (HA).
   * 
   * @example
   * true
   */
  ha?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * milvus-test
   */
  instanceName?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * xxx
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      autoBackup: 'autoBackup',
      autoPay: 'autoPay',
      components: 'components',
      configuration: 'configuration',
      ha: 'ha',
      instanceId: 'instanceId',
      instanceName: 'instanceName',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      autoBackup: 'boolean',
      autoPay: 'boolean',
      components: { 'type': 'array', 'itemType': UpdateInstanceRequestComponents },
      configuration: 'string',
      ha: 'boolean',
      instanceId: 'string',
      instanceName: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

