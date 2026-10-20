// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNodePoolComponentInstanceRequestConfigEnvs extends $dara.Model {
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

export class UpdateNodePoolComponentInstanceRequestConfig extends $dara.Model {
  /**
   * @remarks
   * The custom configuration of the node component.
   * 
   * @example
   * {"cpuManagerPolicy":"static"}
   */
  customConfig?: { [key: string]: any };
  /**
   * @remarks
   * The environment variables of the node component.
   */
  envs?: UpdateNodePoolComponentInstanceRequestConfigEnvs[];
  static names(): { [key: string]: string } {
    return {
      customConfig: 'custom_config',
      envs: 'envs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      envs: { 'type': 'array', 'itemType': UpdateNodePoolComponentInstanceRequestConfigEnvs },
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

export class UpdateNodePoolComponentInstanceRequestRollingPolicy extends $dara.Model {
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
   * The maximum number of nodes that are allowed to fail during the rolling update. Default value: 0. A value of 0 indicates that the task fails if any node fails. A value greater than 0 indicates that the task fails and stops if the cumulative number of failed nodes exceeds this value.
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

export class UpdateNodePoolComponentInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The node component configuration.
   */
  config?: UpdateNodePoolComponentInstanceRequestConfig;
  /**
   * @remarks
   * Specifies whether to disable the rolling update. Default value: false. Updating the baseline configuration triggers a rolling update of the nodes.
   * 
   * @example
   * false
   */
  disableRolling?: boolean;
  /**
   * @remarks
   * The list of nodes to be updated in a rolling manner. By default, all nodes are updated.
   */
  nodeNames?: string[];
  /**
   * @remarks
   * The rolling update configuration.
   */
  rollingPolicy?: UpdateNodePoolComponentInstanceRequestRollingPolicy;
  /**
   * @remarks
   * The node component version.
   * 
   * @example
   * 1.33.3-aliyun.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      disableRolling: 'disable_rolling',
      nodeNames: 'node_names',
      rollingPolicy: 'rolling_policy',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: UpdateNodePoolComponentInstanceRequestConfig,
      disableRolling: 'boolean',
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      rollingPolicy: UpdateNodePoolComponentInstanceRequestRollingPolicy,
      version: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
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

