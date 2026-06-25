// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNodePoolComponentRequestConfig extends $dara.Model {
  /**
   * @remarks
   * The custom configuration of the component.
   * 
   * @example
   * {"cpuManagerPolicy":"static"}
   */
  customConfig?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      customConfig: 'customConfig',
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

export class UpdateNodePoolComponentRequestRollingPolicy extends $dara.Model {
  /**
   * @remarks
   * The interval between batches during the upgrade, in seconds.
   * 
   * @example
   * 0
   */
  batchInterval?: number;
  /**
   * @remarks
   * The maximum number of nodes that can be updated in parallel per batch. Default value: 1.
   * 
   * @example
   * 1
   */
  maxParallelism?: number;
  /**
   * @remarks
   * The automatic pause policy during the node upgrade process.
   * 
   * @example
   * NotPause
   */
  pausePolicy?: string;
  static names(): { [key: string]: string } {
    return {
      batchInterval: 'batchInterval',
      maxParallelism: 'maxParallelism',
      pausePolicy: 'pausePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchInterval: 'number',
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

export class UpdateNodePoolComponentRequest extends $dara.Model {
  /**
   * @remarks
   * The node component configuration.
   */
  config?: UpdateNodePoolComponentRequestConfig;
  /**
   * @remarks
   * Specifies whether to disable rolling updates. Default value: false. When set to false, updating the baseline configuration triggers a rolling update of nodes.
   */
  disableRolling?: boolean;
  /**
   * @remarks
   * The name of the node component.
   * 
   * @example
   * kubelet
   */
  name?: string;
  /**
   * @remarks
   * The list of nodes to be included in the rolling update. By default, all nodes are included.
   */
  nodeNames?: string[];
  /**
   * @remarks
   * The rolling update configuration.
   */
  rollingPolicy?: UpdateNodePoolComponentRequestRollingPolicy;
  /**
   * @remarks
   * The version of the node component.
   * 
   * @example
   * 1.28.9-aliyun.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      disableRolling: 'disableRolling',
      name: 'name',
      nodeNames: 'nodeNames',
      rollingPolicy: 'rollingPolicy',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: UpdateNodePoolComponentRequestConfig,
      disableRolling: 'boolean',
      name: 'string',
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      rollingPolicy: UpdateNodePoolComponentRequestRollingPolicy,
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

