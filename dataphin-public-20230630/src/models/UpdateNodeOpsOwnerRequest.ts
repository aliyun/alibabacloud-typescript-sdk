// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNodeOpsOwnerRequestCommandNodeIdList extends $dara.Model {
  /**
   * @remarks
   * The node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * n_8198365584737107968
   */
  id?: string;
  /**
   * @remarks
   * The node source type. Only offline nodes are supported. Valid values:
   * - DATA_PROCESS: compute node.
   * - PIPELINE: integration node.
   * - BLACK_BOX: logical table.
   * 
   * This parameter is required.
   * 
   * @example
   * DATA_PROCESS
   */
  nodeFromType?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * - DATA_PROCESS: compute node.
   * - PIPELINE_NODE: integration node.
   * - BBOX_LOGIC_TABLE_NODE: logical table.
   * 
   * This parameter is required.
   * 
   * @example
   * DATA_PROCESS
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      nodeFromType: 'NodeFromType',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      nodeFromType: 'string',
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

export class UpdateNodeOpsOwnerRequestCommand extends $dara.Model {
  /**
   * @remarks
   * The list of nodes. Only offline nodes are supported.
   * 
   * This parameter is required.
   */
  nodeIdList?: UpdateNodeOpsOwnerRequestCommandNodeIdList[];
  /**
   * @remarks
   * The updated O&M owners. Specify a list of user account IDs. A maximum of 50 IDs are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  opsOwnerList?: string[];
  static names(): { [key: string]: string } {
    return {
      nodeIdList: 'NodeIdList',
      opsOwnerList: 'OpsOwnerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeIdList: { 'type': 'array', 'itemType': UpdateNodeOpsOwnerRequestCommandNodeIdList },
      opsOwnerList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nodeIdList)) {
      $dara.Model.validateArray(this.nodeIdList);
    }
    if(Array.isArray(this.opsOwnerList)) {
      $dara.Model.validateArray(this.opsOwnerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodeOpsOwnerRequest extends $dara.Model {
  /**
   * @remarks
   * The command for updating O&M owners.
   * 
   * This parameter is required.
   */
  command?: UpdateNodeOpsOwnerRequestCommand;
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
   * The ID of the operator user.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: UpdateNodeOpsOwnerRequestCommand,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.command && typeof (this.command as any).validate === 'function') {
      (this.command as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

