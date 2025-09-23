// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAINodePoolsResponseBodyAINodePoolInfosAINodeInfos extends $dara.Model {
  /**
   * @example
   * model_serving
   */
  bindObject?: string;
  bindStatus?: string;
  /**
   * @example
   * 2024-10-09T02:07:15Z
   */
  createTime?: string;
  /**
   * @example
   * adbpg-ainode
   */
  namespace?: string;
  /**
   * @example
   * ai-xxxxxxxxx
   */
  nodeName?: string;
  /**
   * @example
   * ADB.AIStandard.1
   */
  nodeSpec?: string;
  /**
   * @example
   * 2025-06-16T02:04:42Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      bindObject: 'BindObject',
      bindStatus: 'BindStatus',
      createTime: 'CreateTime',
      namespace: 'Namespace',
      nodeName: 'NodeName',
      nodeSpec: 'NodeSpec',
      updateTime: 'UpdateTime',
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
  AINodeInfos?: ListAINodePoolsResponseBodyAINodePoolInfosAINodeInfos[];
  /**
   * @example
   * aipool-xxxxxxxxx
   */
  AINodePoolId?: string;
  /**
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
  AINodePoolInfos?: ListAINodePoolsResponseBodyAINodePoolInfos[];
  /**
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

