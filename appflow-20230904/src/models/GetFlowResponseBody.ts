// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFlowResponseBodyFlowFlowNodes extends $dara.Model {
  /**
   * @example
   * {\\"authconfigId\\":\\"uac-xxxxxxxxx\\"}
   */
  authMetadata?: string;
  /**
   * @example
   * connector-xxx24b139c62
   */
  connectorId?: string;
  /**
   * @example
   * 2
   */
  connectorVersion?: string;
  /**
   * @example
   * flow-856cb84b309747e48b43
   */
  flowId?: string;
  /**
   * @example
   * 1
   */
  flowVersion?: string;
  /**
   * @example
   * {}
   */
  inputSchema?: string;
  /**
   * @example
   * fn-xxxxxxxx
   */
  nodeId?: string;
  /**
   * @example
   * Node1
   */
  nodeKey?: string;
  /**
   * @example
   * NotifyMessage_1
   */
  nodeName?: string;
  /**
   * @example
   * Trigger
   */
  nodeType?: string;
  /**
   * @example
   * fn-xxxxx,fn-yyyyyy
   */
  prevNodeId?: string;
  /**
   * @example
   * trigger-xxxxxxxxxx
   */
  refId?: string;
  /**
   * @example
   * 1
   */
  refVersion?: string;
  /**
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
   * @example
   * Environment
   */
  key?: string;
  /**
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
   * @example
   * true
   */
  enabled?: string;
  flowDesc?: string;
  /**
   * @example
   * flow-xxxxxxxx
   */
  flowId?: string;
  flowName?: string;
  flowNodes?: GetFlowResponseBodyFlowFlowNodes[];
  /**
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
   * @example
   * 2
   */
  flowVersion?: string;
  /**
   * @example
   * 1
   */
  flowVersionStatus?: string;
  /**
   * @example
   * 2025-07-30T02:13:22Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-11-13T02:11:56Z
   */
  gmtModified?: string;
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
  flow?: GetFlowResponseBodyFlow;
  /**
   * @remarks
   * Id of the request
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

