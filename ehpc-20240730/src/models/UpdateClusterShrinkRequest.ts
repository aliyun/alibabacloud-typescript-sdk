// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateClusterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto scale-out for the cluster. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * 2.1.0
   */
  clientVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable auto scale-in for the cluster. Valid values:
   * 
   * *   true
   * *   false
   */
  clusterCustomConfigurationShrink?: string;
  /**
   * @remarks
   * The URL that is used to download the post-processing script.
   * 
   * @example
   * slurm22.05.8-serverless-cluster-20240805
   */
  clusterDescription?: string;
  /**
   * @remarks
   * The client version. By default, the latest version is used.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The post-processing script of the cluster.
   * 
   * @example
   * slurm22.05.8-serverless-cluster-20240805
   */
  clusterName?: string;
  /**
   * @remarks
   * The idle duration of the compute nodes allowed by the cluster.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The request result. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  enableScaleIn?: boolean;
  /**
   * @remarks
   * The response parameters.
   * 
   * @example
   * true
   */
  enableScaleOut?: boolean;
  /**
   * @remarks
   * The scheduler specifications of the cluster.
   * 
   * @example
   * 2
   */
  growInterval?: number;
  /**
   * @remarks
   * Specifies whether to enable the topology awareness feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * 4
   */
  idleInterval?: number;
  /**
   * @remarks
   * The interval at which the cluster is automatically scaled out.
   * 
   * @example
   * 10000
   */
  maxCoreCount?: number;
  /**
   * @remarks
   * The arguments that are used to run the post-processing script.
   * 
   * @example
   * 500
   */
  maxCount?: number;
  /**
   * @remarks
   * The monitoring details of the cluster.
   */
  monitorSpecShrink?: string;
  /**
   * @remarks
   * The scheduler specifications of the cluster.
   */
  schedulerSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientVersion: 'ClientVersion',
      clusterCustomConfigurationShrink: 'ClusterCustomConfiguration',
      clusterDescription: 'ClusterDescription',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      deletionProtection: 'DeletionProtection',
      enableScaleIn: 'EnableScaleIn',
      enableScaleOut: 'EnableScaleOut',
      growInterval: 'GrowInterval',
      idleInterval: 'IdleInterval',
      maxCoreCount: 'MaxCoreCount',
      maxCount: 'MaxCount',
      monitorSpecShrink: 'MonitorSpec',
      schedulerSpecShrink: 'SchedulerSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientVersion: 'string',
      clusterCustomConfigurationShrink: 'string',
      clusterDescription: 'string',
      clusterId: 'string',
      clusterName: 'string',
      deletionProtection: 'boolean',
      enableScaleIn: 'boolean',
      enableScaleOut: 'boolean',
      growInterval: 'number',
      idleInterval: 'number',
      maxCoreCount: 'number',
      maxCount: 'number',
      monitorSpecShrink: 'string',
      schedulerSpecShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

