// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallNodePoolComponentsRequestComponentsConfig extends $dara.Model {
  /**
   * @remarks
   * Custom parameters for the component.
   */
  customConfig?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      customConfig: 'customConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class InstallNodePoolComponentsRequestComponents extends $dara.Model {
  /**
   * @remarks
   * The configuration details for the component.
   */
  config?: InstallNodePoolComponentsRequestComponentsConfig;
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
   * @example
   * 1.28.9-aliyun.1
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
      config: InstallNodePoolComponentsRequestComponentsConfig,
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

export class InstallNodePoolComponentsRequestRollingPolicy extends $dara.Model {
  /**
   * @remarks
   * The time interval between update batches, in seconds.
   * 
   * @example
   * 0
   */
  batchInterval?: number;
  /**
   * @remarks
   * The maximum number of nodes that can be updated concurrently in each batch. Default: 1.
   * 
   * @example
   * 1
   */
  maxParallelism?: number;
  /**
   * @remarks
   * The strategy for automatic pausing during the update process. Valid values: NotPause, FirstBatchPause, EveryBatchPause.
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

export class InstallNodePoolComponentsRequest extends $dara.Model {
  /**
   * @remarks
   * A list of node components to be installed.
   */
  components?: InstallNodePoolComponentsRequestComponents[];
  /**
   * @remarks
   * A list of specific node names where the component should be installed. If not specified, the component will be installed on all nodes in the node pool.
   */
  nodeNames?: string[];
  /**
   * @remarks
   * Configuration for the rolling update process.
   */
  rollingPolicy?: InstallNodePoolComponentsRequestRollingPolicy;
  static names(): { [key: string]: string } {
    return {
      components: 'components',
      nodeNames: 'nodeNames',
      rollingPolicy: 'rollingPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: { 'type': 'array', 'itemType': InstallNodePoolComponentsRequestComponents },
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      rollingPolicy: InstallNodePoolComponentsRequestRollingPolicy,
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

