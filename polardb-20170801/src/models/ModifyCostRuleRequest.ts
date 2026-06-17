// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCostRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The cost in points per million cache tokens. Default value: 0.
   * 
   * @example
   * 0
   */
  cacheCostPointsPerMillion?: string;
  /**
   * @remarks
   * The cost rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 924d450014e64e88ac6e8486f8e990**
   */
  costRuleId?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The cost in points per million input tokens. Default value: 0.
   * 
   * @example
   * 0
   */
  inputCostPointsPerMillion?: string;
  /**
   * @remarks
   * The model name, such as gpt-4 or qwen-turbo.
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
   * The cost in points per million output tokens. Default value: 0.
   * 
   * @example
   * 10
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
      costRuleId: 'CostRuleId',
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
      costRuleId: 'string',
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

