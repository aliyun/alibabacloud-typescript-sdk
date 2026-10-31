// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComputeSourceRequestCreateCommandConfigList extends $dara.Model {
  /**
   * @remarks
   * The configuration item.
   * 
   * This parameter is required.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * This parameter is required.
   * 
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

export class CreateComputeSourceRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated cluster. This parameter takes effect only when CreateType is left empty or set to COMPUTE_SOURCE, which indicates that a compute source referencing a cluster is created. This parameter is mutually exclusive with CreateType set to CLUSTER.
   * 
   * @example
   * 102311
   */
  clusterId?: number;
  /**
   * @remarks
   * The connection configuration items.
   * 
   * This parameter is required.
   */
  configList?: CreateComputeSourceRequestCreateCommandConfigList[];
  /**
   * @remarks
   * The type of the entity to create. Valid values:
   * - CLUSTER: creates a cluster. You cannot specify ClusterId.
   * - COMPUTE_SOURCE: creates a compute source. This is the default value.
   * 
   * @example
   * CLUSTER
   */
  createType?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the compute source.
   * 
   * This parameter is required.
   * 
   * @example
   * test1011
   */
  name?: string;
  /**
   * @remarks
   * The name of the time zone, such as Asia/Shanghai. If this parameter is not specified during an update, the original value is retained.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  /**
   * @remarks
   * The type of the compute source.
   * 
   * This parameter is required.
   * 
   * @example
   * MacCompute
   */
  type?: string;
  /**
   * @remarks
   * The version of the compute source type.
   * 
   * @example
   * CDH6
   */
  typeVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      configList: 'ConfigList',
      createType: 'CreateType',
      description: 'Description',
      name: 'Name',
      timeZone: 'TimeZone',
      type: 'Type',
      typeVersion: 'TypeVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'number',
      configList: { 'type': 'array', 'itemType': CreateComputeSourceRequestCreateCommandConfigList },
      createType: 'string',
      description: 'string',
      name: 'string',
      timeZone: 'string',
      type: 'string',
      typeVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configList)) {
      $dara.Model.validateArray(this.configList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComputeSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The create command.
   * 
   * This parameter is required.
   */
  createCommand?: CreateComputeSourceRequestCreateCommand;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operating user.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateComputeSourceRequestCreateCommand,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

