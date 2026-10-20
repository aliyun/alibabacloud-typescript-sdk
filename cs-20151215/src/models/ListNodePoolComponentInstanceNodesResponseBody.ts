// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodePoolComponentInstanceNodesResponseBodyNodeListComponentConfig extends $dara.Model {
  /**
   * @remarks
   * The custom configuration of the node component.
   */
  customConfig?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      customConfig: 'custom_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.customConfig) {
      $dara.Model.validateMap(this.customConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodePoolComponentInstanceNodesResponseBodyNodeListComponent extends $dara.Model {
  /**
   * @remarks
   * The configuration of the node component.
   */
  config?: ListNodePoolComponentInstanceNodesResponseBodyNodeListComponentConfig;
  /**
   * @remarks
   * The custom configuration version number of the component on the node.
   * 
   * @example
   * 1
   */
  configRevision?: string;
  /**
   * @remarks
   * The name of the component on the node.
   * 
   * @example
   * kubelet
   */
  name?: string;
  /**
   * @remarks
   * The version of the component on the node.
   * 
   * @example
   * 1.28.9-aliyun.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      configRevision: 'config_revision',
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: ListNodePoolComponentInstanceNodesResponseBodyNodeListComponentConfig,
      configRevision: 'string',
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodePoolComponentInstanceNodesResponseBodyNodeList extends $dara.Model {
  /**
   * @remarks
   * The details of the component on the node.
   */
  component?: ListNodePoolComponentInstanceNodesResponseBodyNodeListComponent;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp1xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * cn-hangzhou.10.91.xx.xx
   */
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      component: 'component',
      instanceId: 'instance_id',
      nodeName: 'node_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      component: ListNodePoolComponentInstanceNodesResponseBodyNodeListComponent,
      instanceId: 'string',
      nodeName: 'string',
    };
  }

  validate() {
    if(this.component && typeof (this.component as any).validate === 'function') {
      (this.component as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodePoolComponentInstanceNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records returned in a single response for pagination.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination cursor. Do not specify this parameter for the first request. For subsequent requests, specify the token returned in the previous response.
   * 
   * @example
   * 5c0a1c0f91c14c6****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of nodes.
   */
  nodeList?: ListNodePoolComponentInstanceNodesResponseBodyNodeList[];
  /**
   * @remarks
   * The total number of nodes.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'max_results',
      nextToken: 'next_token',
      nodeList: 'node_list',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      nodeList: { 'type': 'array', 'itemType': ListNodePoolComponentInstanceNodesResponseBodyNodeList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nodeList)) {
      $dara.Model.validateArray(this.nodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

