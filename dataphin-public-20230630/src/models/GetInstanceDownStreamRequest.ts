// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceDownStreamRequestInstanceGet extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * t_5929472_20210411_9577721
   */
  instanceId?: string;
  /**
   * @remarks
   * Node type of the instance.
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
   * Number of levels to expand downstream in the DAG query. Valid values: 1 to 6.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  downStreamDepth?: number;
  /**
   * @remarks
   * Environment identifier.
   * - DEV: Development environment.
   * - PROD (default): Production environment.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * The request body.
   * 
   * This parameter is required.
   */
  instanceGet?: GetInstanceDownStreamRequestInstanceGet;
  /**
   * @remarks
   * Tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * Run status of the instance.
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
      runStatus: 'RunStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamDepth: 'number',
      env: 'string',
      instanceGet: GetInstanceDownStreamRequestInstanceGet,
      opTenantId: 'number',
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

