// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeSelector extends $dara.Model {
  /**
   * @remarks
   * 节点组ID。当NodeSelectType取值NodeGroup时，该参数生效。
   * 
   * @example
   * ng-869471354ecd****
   * 
   * @deprecated
   */
  nodeGroupId?: string;
  nodeGroupIds?: string[];
  /**
   * @remarks
   * 节点组名称。当NodeSelectType取值NodeGroup，且参数NodeGroupId为空时生效，该参数生效。
   * 
   * @example
   * master-1
   * 
   * @deprecated
   */
  nodeGroupName?: string;
  nodeGroupNames?: string[];
  /**
   * @remarks
   * 节点组类型。当NodeSelectType取值NodeGroup，且参数NodeGroupId为空时生效。数组元数个数N取值范围：0~10。
   * 
   * @example
   * ["CORE","TASK"]
   */
  nodeGroupTypes?: string[];
  /**
   * @remarks
   * 节点名称列表。当NodeSelectType取值Node时，该参数生效。
   * 
   * @example
   * ["core1-1"]
   */
  nodeNames?: string[];
  /**
   * @remarks
   * 节点选择类型。取值范围：
   * - CLUSTER：集群。
   * - NODE_GROUP：节点组。
   * - NODE：节点。
   * 
   * This parameter is required.
   * 
   * @example
   * CLUSTER
   */
  nodeSelectType?: string;
  static names(): { [key: string]: string } {
    return {
      nodeGroupId: 'NodeGroupId',
      nodeGroupIds: 'NodeGroupIds',
      nodeGroupName: 'NodeGroupName',
      nodeGroupNames: 'NodeGroupNames',
      nodeGroupTypes: 'NodeGroupTypes',
      nodeNames: 'NodeNames',
      nodeSelectType: 'NodeSelectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeGroupId: 'string',
      nodeGroupIds: { 'type': 'array', 'itemType': 'string' },
      nodeGroupName: 'string',
      nodeGroupNames: { 'type': 'array', 'itemType': 'string' },
      nodeGroupTypes: { 'type': 'array', 'itemType': 'string' },
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      nodeSelectType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeGroupIds)) {
      $dara.Model.validateArray(this.nodeGroupIds);
    }
    if(Array.isArray(this.nodeGroupNames)) {
      $dara.Model.validateArray(this.nodeGroupNames);
    }
    if(Array.isArray(this.nodeGroupTypes)) {
      $dara.Model.validateArray(this.nodeGroupTypes);
    }
    if(Array.isArray(this.nodeNames)) {
      $dara.Model.validateArray(this.nodeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

