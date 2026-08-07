// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCostRulesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The cost points per million cache tokens. Default value: 0.
   * 
   * @example
   * 0
   */
  cacheCostPointsPerMillion?: string;
  /**
   * @remarks
   * The cost rule ID.
   * 
   * @example
   * 924d450014e64e88ac6e8486f8e990**
   */
  costRuleId?: string;
  /**
   * @remarks
   * The effective target type.
   * 
   * @example
   * global
   */
  effectiveTargetType?: string;
  /**
   * @remarks
   * The effective target value.
   * 
   * @example
   * user
   */
  effectiveTargetValue?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-01-04T16:09:29+08:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2024-10-16 16:46:20
   */
  gmtModified?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * @example
   * pg-xxxxxxxxxx
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
   * The model name.
   * 
   * @example
   * gpt-4
   */
  model?: string;
  /**
   * @remarks
   * The model service ID.
   * 
   * @example
   * ms-xxxxxxxxx
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
  static names(): { [key: string]: string } {
    return {
      cacheCostPointsPerMillion: 'CacheCostPointsPerMillion',
      costRuleId: 'CostRuleId',
      effectiveTargetType: 'EffectiveTargetType',
      effectiveTargetValue: 'EffectiveTargetValue',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      gwClusterId: 'GwClusterId',
      inputCostPointsPerMillion: 'InputCostPointsPerMillion',
      model: 'Model',
      modelServiceId: 'ModelServiceId',
      outputCostPointsPerMillion: 'OutputCostPointsPerMillion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheCostPointsPerMillion: 'string',
      costRuleId: 'string',
      effectiveTargetType: 'string',
      effectiveTargetValue: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      gwClusterId: 'string',
      inputCostPointsPerMillion: 'string',
      model: 'string',
      modelServiceId: 'string',
      outputCostPointsPerMillion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of cost rules.
   */
  items?: DescribeCostRulesResponseBodyItems[];
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
   * The number of records on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 30, 50, and 100. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 24A1990B-4F6E-482B-B8CB-75C612******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeCostRulesResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

