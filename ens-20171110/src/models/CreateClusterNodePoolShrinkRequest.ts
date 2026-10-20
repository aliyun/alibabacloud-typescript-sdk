// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterNodePoolShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster-related configurations.
   */
  kubernetesConfigShrink?: string;
  /**
   * @remarks
   * The node pool configurations.
   * 
   * This parameter is required.
   */
  nodepoolInfoShrink?: string;
  /**
   * @remarks
   * The scaling group configurations.
   * 
   * This parameter is required.
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

