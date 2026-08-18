// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNodePoolComponentInstanceRequestConfig extends $dara.Model {
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

export class UpdateNodePoolComponentInstanceRequestRollingPolicy extends $dara.Model {
  /**
   * @example
   * 10
   */
  batchInterval?: number;
  /**
   * @example
   * 0
   */
  maxFailedNodes?: number;
  /**
   * @example
   * 1
   */
  maxParallelism?: number;
  /**
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
  config?: UpdateNodePoolComponentInstanceRequestConfig;
  /**
   * @example
   * false
   */
  disableRolling?: boolean;
  nodeNames?: string[];
  rollingPolicy?: UpdateNodePoolComponentInstanceRequestRollingPolicy;
  /**
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

