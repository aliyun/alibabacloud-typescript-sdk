// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodePoolComponentInstancesResponseBodyComponentInstancesConfigEnvs extends $dara.Model {
  /**
   * @remarks
   * The name of the environment variable.
   * 
   * @example
   * LOG_LEVEL
   */
  name?: string;
  /**
   * @remarks
   * The value of the environment variable.
   * 
   * @example
   * info
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class ListNodePoolComponentInstancesResponseBodyComponentInstancesConfig extends $dara.Model {
  /**
   * @remarks
   * The custom configuration of the component.
   * 
   * @example
   * {"cpuManagerPolicy":"static"}
   */
  customConfig?: { [key: string]: any };
  /**
   * @remarks
   * The environment variables of the node component.
   */
  envs?: ListNodePoolComponentInstancesResponseBodyComponentInstancesConfigEnvs[];
  static names(): { [key: string]: string } {
    return {
      customConfig: 'custom_config',
      envs: 'envs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      envs: { 'type': 'array', 'itemType': ListNodePoolComponentInstancesResponseBodyComponentInstancesConfigEnvs },
    };
  }

  validate() {
    if(this.customConfig) {
      $dara.Model.validateMap(this.customConfig);
    }
    if(Array.isArray(this.envs)) {
      $dara.Model.validateArray(this.envs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodePoolComponentInstancesResponseBodyComponentInstances extends $dara.Model {
  /**
   * @remarks
   * The configuration of the component.
   */
  config?: ListNodePoolComponentInstancesResponseBodyComponentInstancesConfig;
  /**
   * @remarks
   * The version number of the component configuration.
   * 
   * @example
   * 1
   */
  configRevision?: string;
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * kubelet
   */
  name?: string;
  /**
   * @remarks
   * The state of the component. Valid values: installing, failed, active, upgrading, updating, and uninstalling.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The version of the component.
   * 
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
  /**
   * @remarks
   * The list of node component instances.
   */
  componentInstances?: ListNodePoolComponentInstancesResponseBodyComponentInstances[];
  /**
   * @remarks
   * The maximum number of results to return. Default value: 200.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
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

