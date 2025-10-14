// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNormalizationRuleCapacitiesResponseBodyNormalizationRuleCapacities extends $dara.Model {
  capacities?: string[];
  /**
   * @example
   * detection_preset_rule。
   */
  capacityType?: string;
  /**
   * @example
   * nr-z0b2ssjteut85uoh9nzp。
   */
  normalizationRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      capacities: 'Capacities',
      capacityType: 'CapacityType',
      normalizationRuleId: 'NormalizationRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacities: { 'type': 'array', 'itemType': 'string' },
      capacityType: 'string',
      normalizationRuleId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.capacities)) {
      $dara.Model.validateArray(this.capacities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNormalizationRuleCapacitiesResponseBody extends $dara.Model {
  /**
   * @example
   * 50。
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****。
   */
  nextToken?: string;
  normalizationRuleCapacities?: ListNormalizationRuleCapacitiesResponseBodyNormalizationRuleCapacities[];
  /**
   * @example
   * 1。
   */
  pageNumber?: number;
  /**
   * @example
   * 10。
   */
  pageSize?: number;
  /**
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****。
   */
  requestId?: string;
  /**
   * @example
   * 57。
   */
  totalCount?: number;
  /**
   * @example
   * 3。
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      normalizationRuleCapacities: 'NormalizationRuleCapacities',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      normalizationRuleCapacities: { 'type': 'array', 'itemType': ListNormalizationRuleCapacitiesResponseBodyNormalizationRuleCapacities },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.normalizationRuleCapacities)) {
      $dara.Model.validateArray(this.normalizationRuleCapacities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

