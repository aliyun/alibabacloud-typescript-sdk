// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClusterNodePoolShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  kubernetesConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nodepoolInfoShrink?: string;
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

