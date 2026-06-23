// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeClusterRequestRollingPolicy extends $dara.Model {
  /**
   * @remarks
   * The maximum number of worker nodes that can be upgraded in parallel per batch.
   * 
   * During the worker node upgrade, nodes are upgraded in batches based on the specified maximum parallelism. The number of nodes upgraded in each batch increases as follows: 1, 2, 4, 8, and so on until the maximum parallelism is reached. After the maximum parallelism is reached, each subsequent batch upgrades the maximum number of nodes.
   * 
   * @example
   * 3
   * 
   * @deprecated
   */
  maxParallelism?: number;
  static names(): { [key: string]: string } {
    return {
      maxParallelism: 'max_parallelism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxParallelism: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterRequest extends $dara.Model {
  /**
   * @remarks
   * [This parameter is deprecated] No value is required.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  componentName?: string;
  /**
   * @remarks
   * Specifies whether to upgrade only the control plane. Valid values:
   * - true: upgrades only the control plane.
   * - false: upgrades both the control plane and worker nodes.
   * 
   * @example
   * true
   */
  masterOnly?: boolean;
  /**
   * @remarks
   * The target version to which the cluster is upgraded.
   * 
   * @example
   * 1.32.1-aliyun.1
   */
  nextVersion?: string;
  /**
   * @remarks
   * The rolling upgrade configuration.
   * 
   * @deprecated
   */
  rollingPolicy?: UpgradeClusterRequestRollingPolicy;
  /**
   * @remarks
   * [This parameter is deprecated] Use the `next_version` parameter instead.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'component_name',
      masterOnly: 'master_only',
      nextVersion: 'next_version',
      rollingPolicy: 'rolling_policy',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      masterOnly: 'boolean',
      nextVersion: 'string',
      rollingPolicy: UpgradeClusterRequestRollingPolicy,
      version: 'string',
    };
  }

  validate() {
    if(this.rollingPolicy && typeof (this.rollingPolicy as any).validate === 'function') {
      (this.rollingPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

