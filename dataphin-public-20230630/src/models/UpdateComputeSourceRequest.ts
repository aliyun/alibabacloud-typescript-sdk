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
   * The configuration item value.
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
   * The associated cluster ID. This parameter takes effect only when CreateType is left empty or set to COMPUTE_SOURCE (to create a compute source that references a cluster). This parameter is mutually exclusive with CreateType=CLUSTER.
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
  configList?: UpdateComputeSourceRequestUpdateCommandConfigList[];
  /**
   * @remarks
   * The creation entity type. Valid values:
   * - CLUSTER: Creates the entity as a cluster. ClusterId cannot be specified.
   * - COMPUTE_SOURCE: Creates the entity as a compute source. This is the default value.
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
   * The compute source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 102311
   */
  id?: number;
  /**
   * @remarks
   * The compute source name.
   * 
   * This parameter is required.
   * 
   * @example
   * test1021
   */
  name?: string;
  /**
   * @remarks
   * The compute source type.
   * 
   * This parameter is required.
   * 
   * @example
   * MacCompute
   */
  type?: string;
  /**
   * @remarks
   * The compute source type version.
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
   * The operator user ID.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The edit command.
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

