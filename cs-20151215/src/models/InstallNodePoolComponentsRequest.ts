// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallNodePoolComponentsRequestComponentsConfig extends $dara.Model {
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

export class InstallNodePoolComponentsRequestComponents extends $dara.Model {
  /**
   * @remarks
   * The component configuration.
   */
  config?: InstallNodePoolComponentsRequestComponentsConfig;
  /**
   * @remarks
   * The component name.
   * 
   * This parameter is required.
   * 
   * @example
   * kubelet
   */
  name?: string;
  /**
   * @remarks
   * The component version.
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
   * The interval between batches during the upgrade. Unit: seconds.
   * 
   * @example
   * 0
   */
  batchInterval?: number;
  /**
   * @remarks
   * The maximum number of nodes that can be processed in parallel per batch. Default value: 1.
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

export class InstallNodePoolComponentsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of node components.
   */
  components?: InstallNodePoolComponentsRequestComponents[];
  /**
   * @remarks
   * The list of node names for the rolling update. By default, all nodes are included.
   */
  nodeNames?: string[];
  /**
   * @remarks
   * The rolling update configuration.
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

