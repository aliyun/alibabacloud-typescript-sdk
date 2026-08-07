// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCostRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The cost points per million cached tokens. Default value: 0.
   * 
   * @example
   * 0
   */
  cacheCostPointsPerMillion?: string;
  /**
   * @remarks
   * The effective target type. Valid values:
   * 
   * - global
   * - consumerGroup
   * - consumer
   * 
   * Default value: global.
   * 
   * @example
   * global
   */
  effectiveTargetType?: string;
  /**
   * @remarks
   * The effective target value. This parameter is required when EffectiveTargetType is not set to global.
   * 
   * @example
   * user
   */
  effectiveTargetValue?: string;
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
   * The cost points per million input tokens. Default value: 0.
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
   * The cost points per million output tokens. Default value: 0.
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
      effectiveTargetType: 'EffectiveTargetType',
      effectiveTargetValue: 'EffectiveTargetValue',
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
      effectiveTargetType: 'string',
      effectiveTargetValue: 'string',
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

