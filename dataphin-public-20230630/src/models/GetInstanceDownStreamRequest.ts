// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceDownStreamRequestInstanceGet extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * t_5929472_20210411_9577721
   */
  instanceId?: string;
  /**
   * @remarks
   * The node type of the instance. Valid values:
   * - BBOX_LOGIC_TABLE_NODE
   * - BBOX_LOGIC_FIELD_NODE
   * - BBOX_LOGIC_FIELD_GROUP_NODE
   * - BBOX_INNER_TEMP_NODE
   * - DATA_PROCESS
   * - STREAM_TASK_NODE
   * - FLINK_BATCH
   * 
   * This parameter is required.
   * 
   * @example
   * DATA_PROCESS
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDownStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The number of levels to expand the DAG downwards. Valid values: 1 to 6.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  downStreamDepth?: number;
  /**
   * @remarks
   * The environment identifier. Valid values:
   * - DEV: development environment. 
   * - PROD: production environment. This is the default value.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * The get request.
   * 
   * This parameter is required.
   */
  instanceGet?: GetInstanceDownStreamRequestInstanceGet;
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
   * The run status of the instance. Valid values:
   * - INIT
   * - WATING
   * - RUNNING
   * - SUCCESS
   * - FAILED
   * 
   * @example
   * SUCCESS
   */
  runStatus?: string;
  static names(): { [key: string]: string } {
    return {
      downStreamDepth: 'DownStreamDepth',
      env: 'Env',
      instanceGet: 'InstanceGet',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      runStatus: 'RunStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamDepth: 'number',
      env: 'string',
      instanceGet: GetInstanceDownStreamRequestInstanceGet,
      opTenantId: 'number',
      opUserId: 'string',
      runStatus: 'string',
    };
  }

  validate() {
    if(this.instanceGet && typeof (this.instanceGet as any).validate === 'function') {
      (this.instanceGet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

