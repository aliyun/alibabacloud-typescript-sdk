// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ComponentLayoutNodeSelector extends $dara.Model {
  /**
   * @remarks
   * 节点结束编号，包含结束编号。
   * 
   * @example
   * 3
   */
  nodeEndIndex?: number;
  /**
   * @remarks
   * 节点组ID。
   * 
   * @example
   * G-F609686D45D4ABCD
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * 机器组下标编号。
   * 
   * @example
   * 1
   */
  nodeGroupIndex?: number;
  /**
   * @remarks
   * 机器组名。
   * 
   * @example
   * master-1
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * SelectType = NODE_GROUP 且 nodeGroupId 不存在时使用
   * 
   * @example
   * [null]
   */
  nodeGroupTypes?: string[];
  /**
   * @remarks
   * 节点名称列表。
   * 
   * @example
   * [null]
   */
  nodeNames?: string[];
  /**
   * @remarks
   * 节点选择类型。
   * 
   * This parameter is required.
   * 
   * @example
   * CLUSTER
   */
  nodeSelectType?: string;
  /**
   * @remarks
   * 节点开始编号，包含开始编号。
   * 
   * @example
   * 1
   */
  nodeStartIndex?: number;
  static names(): { [key: string]: string } {
    return {
      nodeEndIndex: 'NodeEndIndex',
      nodeGroupId: 'NodeGroupId',
      nodeGroupIndex: 'NodeGroupIndex',
      nodeGroupName: 'NodeGroupName',
      nodeGroupTypes: 'NodeGroupTypes',
      nodeNames: 'NodeNames',
      nodeSelectType: 'NodeSelectType',
      nodeStartIndex: 'NodeStartIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeEndIndex: 'number',
      nodeGroupId: 'string',
      nodeGroupIndex: 'number',
      nodeGroupName: 'string',
      nodeGroupTypes: { 'type': 'array', 'itemType': 'string' },
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      nodeSelectType: 'string',
      nodeStartIndex: 'number',
    };
  }

  validate() {
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

