// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFlowResponseBodyFlowFlowNodes extends $dara.Model {
  /**
   * @remarks
   * The authentication credentials of the node.
   * 
   * @example
   * {\\"authconfigId\\":\\"uac-xxxxxxxxx\\"}
   */
  authMetadata?: string;
  /**
   * @remarks
   * The connector ID.
   * 
   * @example
   * connector-xxx24b139c62
   */
  connectorId?: string;
  /**
   * @remarks
   * The connector version.
   * 
   * @example
   * 2
   */
  connectorVersion?: string;
  /**
   * @remarks
   * The flow ID.
   * 
   * @example
   * flow-856cb84b309747e48b43
   */
  flowId?: string;
  /**
   * @remarks
   * The flow version.
   * 
   * @example
   * 1
   */
  flowVersion?: string;
  /**
   * @remarks
   * The metadata of the node.
   * 
   * @example
   * {}
   */
  inputSchema?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * fn-xxxxxxxx
   */
  nodeId?: string;
  /**
   * @remarks
   * The node key.
   * 
   * @example
   * Node1
   */
  nodeKey?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * NotifyMessage_1
   */
  nodeName?: string;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * Trigger
   */
  nodeType?: string;
  /**
   * @remarks
   * The ID of the previous node.
   * 
   * @example
   * fn-xxxxx,fn-yyyyyy
   */
  prevNodeId?: string;
  /**
   * @remarks
   * The ID of the trigger or action.
   * 
   * @example
   * trigger-xxxxxxxxxx
   */
  refId?: string;
  /**
   * @remarks
   * The trigger or action version.
   * 
   * @example
   * 1
   */
  refVersion?: string;
  /**
   * @remarks
   * The webhook URL.
   * 
   * @example
   * https://{uid}.computenest.aliyun.com/webhook/xxxxxxxx
   */
  webhookUrl?: string;
  static names(): { [key: string]: string } {
    return {
      authMetadata: 'AuthMetadata',
      connectorId: 'ConnectorId',
      connectorVersion: 'ConnectorVersion',
      flowId: 'FlowId',
      flowVersion: 'FlowVersion',
      inputSchema: 'InputSchema',
      nodeId: 'NodeId',
      nodeKey: 'NodeKey',
      nodeName: 'NodeName',
      nodeType: 'NodeType',
      prevNodeId: 'PrevNodeId',
      refId: 'RefId',
      refVersion: 'RefVersion',
      webhookUrl: 'WebhookUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMetadata: 'string',
      connectorId: 'string',
      connectorVersion: 'string',
      flowId: 'string',
      flowVersion: 'string',
      inputSchema: 'string',
      nodeId: 'string',
      nodeKey: 'string',
      nodeName: 'string',
      nodeType: 'string',
      prevNodeId: 'string',
      refId: 'string',
      refVersion: 'string',
      webhookUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowResponseBodyFlowTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. The value can be up to 64 characters in length.
   * 
   * @example
   * Environment
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * pre
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

export class GetFlowResponseBodyFlow extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the flow is enabled.
   * 
   * @example
   * true
   */
  enabled?: string;
  /**
   * @remarks
   * The flow description.
   * 
   * @example
   * 以AI卡片形式发送至钉钉群聊，如果想要支持私聊，请使用同时支持群聊&私聊的模版
   */
  flowDesc?: string;
  /**
   * @remarks
   * The flow ID.
   * 
   * @example
   * flow-xxxxxxxx
   */
  flowId?: string;
  /**
   * @remarks
   * The flow name.
   * 
   * @example
   * 微信连接流1
   */
  flowName?: string;
  /**
   * @remarks
   * The list of nodes.
   * 
   * @example
   * 连接流节点信息
   */
  flowNodes?: GetFlowResponseBodyFlowFlowNodes[];
  /**
   * @remarks
   * The flow template content.
   * 
   * @example
   * {
   *   "FormatVersion": "appflow-2025-07-01",
   *   "Nodes": [
   *         {}
   *    ]
   * }
   */
  flowTemplate?: string;
  /**
   * @remarks
   * The flow version.
   * 
   * @example
   * 2
   */
  flowVersion?: string;
  /**
   * @remarks
   * The flow version status.
   * 
   * @example
   * 1
   */
  flowVersionStatus?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-07-30T02:13:22Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2025-11-13T02:11:56Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * A list of tags.
   */
  tags?: GetFlowResponseBodyFlowTags[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      flowDesc: 'FlowDesc',
      flowId: 'FlowId',
      flowName: 'FlowName',
      flowNodes: 'FlowNodes',
      flowTemplate: 'FlowTemplate',
      flowVersion: 'FlowVersion',
      flowVersionStatus: 'FlowVersionStatus',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'string',
      flowDesc: 'string',
      flowId: 'string',
      flowName: 'string',
      flowNodes: { 'type': 'array', 'itemType': GetFlowResponseBodyFlowFlowNodes },
      flowTemplate: 'string',
      flowVersion: 'string',
      flowVersionStatus: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      tags: { 'type': 'array', 'itemType': GetFlowResponseBodyFlowTags },
    };
  }

  validate() {
    if(Array.isArray(this.flowNodes)) {
      $dara.Model.validateArray(this.flowNodes);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The flow object.
   */
  flow?: GetFlowResponseBodyFlow;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6E1E38D-011F-5368-ADD8-4DC278254AA3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: GetFlowResponseBodyFlow,
      requestId: 'string',
    };
  }

  validate() {
    if(this.flow && typeof (this.flow as any).validate === 'function') {
      (this.flow as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

