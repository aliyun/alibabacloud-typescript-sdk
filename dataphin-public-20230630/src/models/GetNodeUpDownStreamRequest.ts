// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeUpDownStreamRequestNodeId extends $dara.Model {
  /**
   * @remarks
   * The list of field IDs. This parameter is applicable when the node is a logical table node. If you do not specify this parameter, all fields in the table are queried by default.
   * 
   * @example
   * 12
   */
  fieldIdList?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 11313
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      fieldIdList: 'FieldIdList',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldIdList: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeUpDownStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The downstream depth. Default value: 1.
   * 
   * @example
   * 1
   */
  downStreamDepth?: number;
  /**
   * @remarks
   * The environment identifier. Valid values:
   * - DEV: Development environment.
   * - PROD: Production environment.
   * Default value: PROD.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * This parameter is required.
   */
  nodeId?: GetNodeUpDownStreamRequestNodeId;
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
   * The project ID.
   * 
   * @example
   * 113123
   */
  projectId?: number;
  /**
   * @remarks
   * The upstream depth. Default value: 1.
   * 
   * @example
   * 1
   */
  upStreamDepth?: number;
  static names(): { [key: string]: string } {
    return {
      downStreamDepth: 'DownStreamDepth',
      env: 'Env',
      nodeId: 'NodeId',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      projectId: 'ProjectId',
      upStreamDepth: 'UpStreamDepth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamDepth: 'number',
      env: 'string',
      nodeId: GetNodeUpDownStreamRequestNodeId,
      opTenantId: 'number',
      opUserId: 'string',
      projectId: 'number',
      upStreamDepth: 'number',
    };
  }

  validate() {
    if(this.nodeId && typeof (this.nodeId as any).validate === 'function') {
      (this.nodeId as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

