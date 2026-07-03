// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNormalizationRuleCapacitiesResponseBodyNormalizationRuleCapacities extends $dara.Model {
  /**
   * @remarks
   * The list of security capabilities.
   */
  capacities?: string[];
  /**
   * @remarks
   * The type of the security capability. Valid values:
   * 
   * - detection_preset_rule: predefined analysis rule.
   * 
   * - detection_custom_rule: custom analysis rule.
   * 
   * - incident_investigation: security event handling.
   * 
   * - soar_playbooks: predefined playbook.
   * 
   * @example
   * detection_preset_rule
   */
  capacityType?: string;
  /**
   * @remarks
   * The ID of the normalization rule.
   * 
   * @example
   * nr-z0b2ssjteut85uoh9nzp
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
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. If the response is truncated, use this token in your next request to retrieve the next page of results. If this parameter is empty, all results have been returned.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of security capabilities that are associated with the normalization rules.
   */
  normalizationRuleCapacities?: ListNormalizationRuleCapacitiesResponseBodyNormalizationRuleCapacities[];
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 57
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 3
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

