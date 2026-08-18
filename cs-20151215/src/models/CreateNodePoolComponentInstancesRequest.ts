// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodePoolComponentInstancesRequestComponentsConfig extends $dara.Model {
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

export class CreateNodePoolComponentInstancesRequestComponents extends $dara.Model {
  config?: CreateNodePoolComponentInstancesRequestComponentsConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * kubelet
   */
  name?: string;
  /**
   * @remarks
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

export class CreateNodePoolComponentInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  components?: CreateNodePoolComponentInstancesRequestComponents[];
  nodeNames?: string[];
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

