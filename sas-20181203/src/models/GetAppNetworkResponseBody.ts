// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppNetworkResponseBodyAppNetworkEdge extends $dara.Model {
  /**
   * @remarks
   * The destination node ID.
   * 
   * @example
   * 102
   */
  dstNodeId?: string;
  /**
   * @remarks
   * The destination node type. Valid values:
   * - **app**: application.
   * - **internet**: external network node.
   * 
   * @example
   * app
   */
  dstNodeType?: string;
  /**
   * @remarks
   * The edge ID.
   * 
   * @example
   * 3534
   */
  id?: string;
  /**
   * @remarks
   * The destination port number.
   * 
   * @example
   * 8080
   */
  port?: string;
  /**
   * @remarks
   * The source node ID.
   * 
   * @example
   * 101
   */
  srcNodeId?: string;
  /**
   * @remarks
   * The source node type. Valid values:
   * - **app**: application.
   * - **internet**: external network node.
   * 
   * @example
   * app
   */
  srcNodeType?: string;
  static names(): { [key: string]: string } {
    return {
      dstNodeId: 'DstNodeId',
      dstNodeType: 'DstNodeType',
      id: 'Id',
      port: 'Port',
      srcNodeId: 'SrcNodeId',
      srcNodeType: 'SrcNodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstNodeId: 'string',
      dstNodeType: 'string',
      id: 'string',
      port: 'string',
      srcNodeId: 'string',
      srcNodeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppNetworkResponseBodyAppNetworkNamespace extends $dara.Model {
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The namespace name.
   * 
   * @example
   * default
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppNetworkResponseBodyAppNetworkNode extends $dara.Model {
  /**
   * @remarks
   * The list of container IDs.
   */
  containerIds?: string[];
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 1274
   */
  id?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * console
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * 1
   */
  namespaceId?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * - **3**: High.
   * - **2**: Medium.
   * - **1**: Low.
   * - **0**: Safe.
   * - **-1**: Unknown.
   * 
   * @example
   * 0
   */
  riskLevel?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * - **app**: application
   * - **internet**: external network node.
   * 
   * @example
   * app
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      containerIds: 'ContainerIds',
      id: 'Id',
      name: 'Name',
      namespaceId: 'NamespaceId',
      riskLevel: 'RiskLevel',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerIds: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      name: 'string',
      namespaceId: 'string',
      riskLevel: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.containerIds)) {
      $dara.Model.validateArray(this.containerIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppNetworkResponseBodyAppNetwork extends $dara.Model {
  /**
   * @remarks
   * The topology edge information.
   */
  edge?: GetAppNetworkResponseBodyAppNetworkEdge[];
  /**
   * @remarks
   * The namespace.
   */
  namespace?: GetAppNetworkResponseBodyAppNetworkNamespace[];
  /**
   * @remarks
   * The application node information.
   */
  node?: GetAppNetworkResponseBodyAppNetworkNode[];
  static names(): { [key: string]: string } {
    return {
      edge: 'Edge',
      namespace: 'Namespace',
      node: 'Node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edge: { 'type': 'array', 'itemType': GetAppNetworkResponseBodyAppNetworkEdge },
      namespace: { 'type': 'array', 'itemType': GetAppNetworkResponseBodyAppNetworkNamespace },
      node: { 'type': 'array', 'itemType': GetAppNetworkResponseBodyAppNetworkNode },
    };
  }

  validate() {
    if(Array.isArray(this.edge)) {
      $dara.Model.validateArray(this.edge);
    }
    if(Array.isArray(this.namespace)) {
      $dara.Model.validateArray(this.namespace);
    }
    if(Array.isArray(this.node)) {
      $dara.Model.validateArray(this.node);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppNetworkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application network topology information.
   */
  appNetwork?: GetAppNetworkResponseBodyAppNetwork;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 7D46EDB0-xxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appNetwork: 'AppNetwork',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appNetwork: GetAppNetworkResponseBodyAppNetwork,
      requestId: 'string',
    };
  }

  validate() {
    if(this.appNetwork && typeof (this.appNetwork as any).validate === 'function') {
      (this.appNetwork as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

