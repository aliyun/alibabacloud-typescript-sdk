// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableModelsRequest extends $dara.Model {
  /**
   * @remarks
   * aideploy
   * 
   * @example
   * aideploy
   */
  kubeType?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      kubeType: 'KubeType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kubeType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

