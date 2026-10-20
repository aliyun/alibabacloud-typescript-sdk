// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClusterNodePoolShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * Only ECK cluster IDs with the eck- prefix are supported. You can obtain the ID by calling the DescribeClustersV1 operation. Serverless cluster IDs returned by the DescribeCluster operation are not supported. The cluster must be in the running state. After creation, it usually takes 10 to 20 minutes to complete initialization.
   * 
   * This parameter is required.
   * 
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The Kubernetes configuration.
   */
  kubernetesConfigShrink?: string;
  /**
   * @remarks
   * The node pool information.
   * 
   * This parameter is required.
   */
  nodepoolInfoShrink?: string;
  /**
   * @remarks
   * The scaling group configuration.
   */
  scalingGroupShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      kubernetesConfigShrink: 'KubernetesConfig',
      nodepoolInfoShrink: 'NodepoolInfo',
      scalingGroupShrink: 'ScalingGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      kubernetesConfigShrink: 'string',
      nodepoolInfoShrink: 'string',
      scalingGroupShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

