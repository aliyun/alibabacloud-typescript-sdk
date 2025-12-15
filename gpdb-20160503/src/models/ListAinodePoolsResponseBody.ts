// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAINodePoolsResponseBodyAINodePoolInfosAINodeInfos extends $dara.Model {
  /**
   * @remarks
   * The binding type of the AI node.
   * 
   * @example
   * model_serving
   */
  bindObject?: string;
  /**
   * @remarks
   * The status of the AI node.
   * 
   * *   unbound: The node is not bound.
   * *   bound: The node is bound.
   */
  bindStatus?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-10-09T02:07:15Z
   */
  createTime?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * adbpg-ainode
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the AI node.
   * 
   * @example
   * ai-xxxxxxxxx
   */
  nodeName?: string;
  /**
   * @remarks
   * The AI node specifications. The list of supported specifications is shown below.
   * 
   *     ADB.AIMedium.1
   *     ADB.AILarge.1
   *     ADB.AIStandard.2
   *     ADB.AIMedium.2
   *     ADB.AILarge.2
   *     ADB.AIXLarge.2
   *     ADB.AIStandard.6
   *     ADB.AIMedium.6
   *     ADB.AILarge.6
   *     ADB.AIXLarge.6
   *     ADB.AIStandard.3
   *     ADB.AIMedium.3
   *     ADB.AILarge.3
   *     ADB.AIXLarge.3
   *     ADB.AIStandard.4
   *     ADB.AIMedium.4
   *     ADB.AILarge.4
   *     ADB.AIXLarge.4
   *     ADB.AIStandard.5
   *     ADB.AIMedium.5
   *     ADB.AILarge.5
   *     ADB.AIXLarge.5
   *     ADB.AIStandard.8
   *     ADB.AIMedium.8
   *     ADB.AILarge.8
   *     ADB.AIXLarge.8
   *     ADB.AI2XLarge.8
   * 
   * @example
   * ADB.AIStandard.1
   */
  nodeSpec?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-06-16T02:04:42Z
   */
  updateTime?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      bindObject: 'BindObject',
      bindStatus: 'BindStatus',
      createTime: 'CreateTime',
      namespace: 'Namespace',
      nodeName: 'NodeName',
      nodeSpec: 'NodeSpec',
      updateTime: 'UpdateTime',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindObject: 'string',
      bindStatus: 'string',
      createTime: 'string',
      namespace: 'string',
      nodeName: 'string',
      nodeSpec: 'string',
      updateTime: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAINodePoolsResponseBodyAINodePoolInfos extends $dara.Model {
  /**
   * @remarks
   * AI node details.
   */
  AINodeInfos?: ListAINodePoolsResponseBodyAINodePoolInfosAINodeInfos[];
  /**
   * @remarks
   * The ID of the resource pool to which the AI node belongs.
   * 
   * @example
   * aipool-xxxxxxxxx
   */
  AINodePoolId?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 2
   */
  nodeNum?: string;
  static names(): { [key: string]: string } {
    return {
      AINodeInfos: 'AINodeInfos',
      AINodePoolId: 'AINodePoolId',
      nodeNum: 'NodeNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AINodeInfos: { 'type': 'array', 'itemType': ListAINodePoolsResponseBodyAINodePoolInfosAINodeInfos },
      AINodePoolId: 'string',
      nodeNum: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.AINodeInfos)) {
      $dara.Model.validateArray(this.AINodeInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAINodePoolsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the AI node resource pool.
   */
  AINodePoolInfos?: ListAINodePoolsResponseBodyAINodePoolInfos[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AINodePoolInfos: 'AINodePoolInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AINodePoolInfos: { 'type': 'array', 'itemType': ListAINodePoolsResponseBodyAINodePoolInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.AINodePoolInfos)) {
      $dara.Model.validateArray(this.AINodePoolInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

