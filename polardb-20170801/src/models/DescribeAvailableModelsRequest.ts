// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableModelsRequest extends $dara.Model {
  /**
   * @remarks
   * The service type. The value must be set to `aideploy`.
   * 
   * @example
   * aideploy
   */
  kubeType?: string;
  /**
   * @remarks
   * The region ID.
   * 
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

