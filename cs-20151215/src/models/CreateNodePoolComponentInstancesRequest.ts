// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodePoolComponentInstancesRequestComponentsConfigEnvs extends $dara.Model {
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

export class CreateNodePoolComponentInstancesRequestComponentsConfig extends $dara.Model {
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
  envs?: CreateNodePoolComponentInstancesRequestComponentsConfigEnvs[];
  static names(): { [key: string]: string } {
    return {
      customConfig: 'custom_config',
      envs: 'envs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      envs: { 'type': 'array', 'itemType': CreateNodePoolComponentInstancesRequestComponentsConfigEnvs },
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

export class CreateNodePoolComponentInstancesRequestComponents extends $dara.Model {
  /**
   * @remarks
   * The configuration of the component.
   */
  config?: CreateNodePoolComponentInstancesRequestComponentsConfig;
  /**
   * @remarks
   * The name of the component.
   * 
   * This parameter is required.
   * 
   * @example
   * kubelet
   */
  name?: string;
  /**
   * @remarks
   * The version of the component.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.33.3-aliyun.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: CreateNodePoolComponentInstancesRequestComponentsConfig,
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

export class CreateNodePoolComponentInstancesRequestRollingPolicy extends $dara.Model {
  /**
   * @remarks
   * The upgrade interval between batches, in seconds. Default value: 0.
   * 
   * @example
   * 10
   */
  batchInterval?: number;
  /**
   * @remarks
   * The maximum number of nodes allowed to fail during the rolling update. Default value: 0. A value of 0 indicates that the task fails if any node fails. A value greater than 0 indicates that the task fails and stops if the cumulative number of failed nodes exceeds this value.
   * 
   * @example
   * 0
   */
  maxFailedNodes?: number;
  /**
   * @remarks
   * The maximum number of parallel updates per batch. Default value: 1.
   * 
   * @example
   * 1
   */
  maxParallelism?: number;
  /**
   * @remarks
   * The auto-pause policy during the node upgrade process. Valid values: NotPause, FirstBatch, and EveryBatch. Default value: NotPause.
   * 
   * @example
   * NotPause
   */
  pausePolicy?: string;
  static names(): { [key: string]: string } {
    return {
      batchInterval: 'batch_interval',
      maxFailedNodes: 'max_failed_nodes',
      maxParallelism: 'max_parallelism',
      pausePolicy: 'pause_policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchInterval: 'number',
      maxFailedNodes: 'number',
      maxParallelism: 'number',
      pausePolicy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodePoolComponentInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of node components.
   * 
   * This parameter is required.
   */
  components?: CreateNodePoolComponentInstancesRequestComponents[];
  /**
   * @remarks
   * The list of nodes specified for the rolling update. Default value: all nodes.
   */
  nodeNames?: string[];
  /**
   * @remarks
   * The rolling update configuration.
   */
  rollingPolicy?: CreateNodePoolComponentInstancesRequestRollingPolicy;
  static names(): { [key: string]: string } {
    return {
      components: 'components',
      nodeNames: 'node_names',
      rollingPolicy: 'rolling_policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: { 'type': 'array', 'itemType': CreateNodePoolComponentInstancesRequestComponents },
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      rollingPolicy: CreateNodePoolComponentInstancesRequestRollingPolicy,
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(Array.isArray(this.nodeNames)) {
      $dara.Model.validateArray(this.nodeNames);
    }
    if(this.rollingPolicy && typeof (this.rollingPolicy as any).validate === 'function') {
      (this.rollingPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

