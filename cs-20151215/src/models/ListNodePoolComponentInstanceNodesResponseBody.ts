// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodePoolComponentInstanceNodesResponseBodyNodeListComponentConfig extends $dara.Model {
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
  config?: ListNodePoolComponentInstanceNodesResponseBodyNodeListComponentConfig;
  /**
   * @example
   * 1
   */
  configRevision?: string;
  /**
   * @example
   * kubelet
   */
  name?: string;
  /**
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
  component?: ListNodePoolComponentInstanceNodesResponseBodyNodeListComponent;
  /**
   * @example
   * i-bp1xxxxx
   */
  instanceId?: string;
  /**
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
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 5c0a1c0f91c14c6****
   */
  nextToken?: string;
  nodeList?: ListNodePoolComponentInstanceNodesResponseBodyNodeList[];
  /**
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

