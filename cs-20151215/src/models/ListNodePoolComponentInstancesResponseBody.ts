// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodePoolComponentInstancesResponseBodyComponentInstancesConfig extends $dara.Model {
  /**
   * @example
   * {"cpuManagerPolicy":"static"}
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

export class ListNodePoolComponentInstancesResponseBodyComponentInstances extends $dara.Model {
  config?: ListNodePoolComponentInstancesResponseBodyComponentInstancesConfig;
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
   * active
   */
  state?: string;
  /**
   * @example
   * 1.33.3-aliyun.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      configRevision: 'config_revision',
      name: 'name',
      state: 'state',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: ListNodePoolComponentInstancesResponseBodyComponentInstancesConfig,
      configRevision: 'string',
      name: 'string',
      state: 'string',
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

export class ListNodePoolComponentInstancesResponseBody extends $dara.Model {
  componentInstances?: ListNodePoolComponentInstancesResponseBodyComponentInstances[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 5c0a1c0f91c14c6****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      componentInstances: 'component_instances',
      maxResults: 'max_results',
      nextToken: 'next_token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentInstances: { 'type': 'array', 'itemType': ListNodePoolComponentInstancesResponseBodyComponentInstances },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.componentInstances)) {
      $dara.Model.validateArray(this.componentInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

