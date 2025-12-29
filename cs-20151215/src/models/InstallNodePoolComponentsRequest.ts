// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallNodePoolComponentsRequestComponentsConfig extends $dara.Model {
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
  config?: InstallNodePoolComponentsRequestComponentsConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
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
   * @example
   * 0
   */
  batchInterval?: number;
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
  components?: InstallNodePoolComponentsRequestComponents[];
  nodeNames?: string[];
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

