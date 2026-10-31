// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComputeSourceRequestUpdateCommandConfigList extends $dara.Model {
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

export class UpdateComputeSourceRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated cluster. This parameter takes effect only when CreateType is left empty or set to COMPUTE_SOURCE, which means creating a compute source that references a cluster. This parameter is mutually exclusive with CreateType=CLUSTER.
   * 
   * @example
   * 102311
   */
  clusterId?: number;
  /**
   * @remarks
   * The connection configurations.
   * 
   * This parameter is required.
   */
  configList?: UpdateComputeSourceRequestUpdateCommandConfigList[];
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
   * This parameter is required.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the compute source.
   * 
   * This parameter is required.
   * 
   * @example
   * 102311
   */
  id?: number;
  /**
   * @remarks
   * The name of the compute source.
   * 
   * This parameter is required.
   * 
   * @example
   * test1021
   */
  name?: string;
  /**
   * @remarks
   * The name of the time zone, such as Asia/Shanghai. If you do not specify this parameter when you update the compute source, the original value is retained.
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
      id: 'Id',
      name: 'Name',
      timeZone: 'TimeZone',
      type: 'Type',
      typeVersion: 'TypeVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'number',
      configList: { 'type': 'array', 'itemType': UpdateComputeSourceRequestUpdateCommandConfigList },
      createType: 'string',
      description: 'string',
      id: 'number',
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

export class UpdateComputeSourceRequest extends $dara.Model {
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
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The update command.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdateComputeSourceRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      updateCommand: UpdateComputeSourceRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

