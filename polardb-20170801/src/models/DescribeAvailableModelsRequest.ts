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
   * @remarks
   * The model type. Valid values: custom or public. If this parameter is not specified, all models are returned.
   * 
   * @example
   * custom
   */
  modelType?: string;
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
      modelType: 'ModelType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kubeType: 'string',
      modelType: 'string',
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

