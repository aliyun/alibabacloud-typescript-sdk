// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeClusterRequestRollingPolicy extends $dara.Model {
  /**
   * @remarks
   * The maximum number of nodes concurrently upgraded per batch.
   * 
   * @example
   * 3
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
   * This parameter is deprecated. No need to pass values.
   * 
   * @example
   * k8s
   * 
   * @deprecated
   */
  componentName?: string;
  /**
   * @remarks
   * Specifies whether to upgrade only master nodes. Valid values:
   * 
   * *   true: upgrades master nodes only.
   * *   false: upgrades both master and worker nodes.
   * 
   * @example
   * true
   */
  masterOnly?: boolean;
  /**
   * @remarks
   * The target Kubernetes version for cluster upgrade.
   * 
   * @example
   * 1.16.9-aliyun.1
   */
  nextVersion?: string;
  /**
   * @remarks
   * The rolling update configuration.
   */
  rollingPolicy?: UpgradeClusterRequestRollingPolicy;
  /**
   * @remarks
   * This parameter is deprecated. Use next_version to specify the upgrade target Kubernetes version.
   * 
   * @example
   * 1.14.8-aliyun.1
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

