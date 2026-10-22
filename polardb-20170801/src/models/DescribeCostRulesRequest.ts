// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCostRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cost rule.
   * 
   * @example
   * cr-xxx
   */
  costRuleId?: string;
  /**
   * @remarks
   * The effective target type used to filter the results. Valid values: global, consumerGroup, and consumer.
   * 
   * @example
   * global
   */
  effectiveTargetType?: string;
  /**
   * @remarks
   * The effective target value used to filter the results.
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
   * pg-xxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The input token tier used to filter the results. Returns rules that include this tier. Valid values: 0-32K, 32K-64K, 64K-128K, 128K-256K, 256K-512K, 512K-1M, and 1M+.
   * 
   * @example
   * 0-32K
   */
  inputTokenTier?: string;
  /**
   * @remarks
   * The name of the model, such as gpt-4 or qwen-turbo.
   * 
   * @example
   * qwen3-max
   */
  modelName?: string;
  /**
   * @remarks
   * The ID of the model service.
   * 
   * @example
   * ms-xxxxxx
   */
  modelServiceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * * **30**
   * * **50**
   * * **100**
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
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
      costRuleId: 'CostRuleId',
      effectiveTargetType: 'EffectiveTargetType',
      effectiveTargetValue: 'EffectiveTargetValue',
      gwClusterId: 'GwClusterId',
      inputTokenTier: 'InputTokenTier',
      modelName: 'ModelName',
      modelServiceId: 'ModelServiceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costRuleId: 'string',
      effectiveTargetType: 'string',
      effectiveTargetValue: 'string',
      gwClusterId: 'string',
      inputTokenTier: 'string',
      modelName: 'string',
      modelServiceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

