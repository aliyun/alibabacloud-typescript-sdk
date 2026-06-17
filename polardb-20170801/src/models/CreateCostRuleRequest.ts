// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCostRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The number of cost points per million cache tokens. The default value is 0.
   * 
   * @example
   * 0
   */
  cacheCostPointsPerMillion?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The number of cost points per million input tokens. The default value is 0.
   * 
   * @example
   * 0
   */
  inputCostPointsPerMillion?: string;
  /**
   * @remarks
   * The name of the model, such as `gpt-4` or `qwen-turbo`.
   * 
   * This parameter is required.
   * 
   * @example
   * gpt-4
   */
  modelName?: string;
  /**
   * @remarks
   * The model service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ms-xxxxxx
   */
  modelServiceId?: string;
  /**
   * @remarks
   * The number of cost points per million output tokens. The default value is 0.
   * 
   * @example
   * 0
   */
  outputCostPointsPerMillion?: string;
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
      cacheCostPointsPerMillion: 'CacheCostPointsPerMillion',
      gwClusterId: 'GwClusterId',
      inputCostPointsPerMillion: 'InputCostPointsPerMillion',
      modelName: 'ModelName',
      modelServiceId: 'ModelServiceId',
      outputCostPointsPerMillion: 'OutputCostPointsPerMillion',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheCostPointsPerMillion: 'string',
      gwClusterId: 'string',
      inputCostPointsPerMillion: 'string',
      modelName: 'string',
      modelServiceId: 'string',
      outputCostPointsPerMillion: 'string',
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

