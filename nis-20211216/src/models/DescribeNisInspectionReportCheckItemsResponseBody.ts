// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisInspectionReportCheckItemsResponseBodyCheckItemListCheckResultList extends $dara.Model {
  /**
   * @remarks
   * The number of risks at the specified risk level in the inspection report.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * - **HighRisk**
   * 
   * - **MediumRisk**
   * 
   * - **LowRisk**
   * 
   * - **NoRisk**
   * 
   * @example
   * LowRisk
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      riskLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionReportCheckItemsResponseBodyCheckItemListRecommendationList extends $dara.Model {
  /**
   * @remarks
   * The description of the abnormal item.
   * 
   * @example
   * Multiple cross-zone resources share a single NAT gateway.
   */
  abnormality?: string;
  /**
   * @remarks
   * The metadata of the resource that corresponds to the abnormal item.
   * 
   * @example
   * {"Columns":[{"ColumnType":"id","ColumnTitle":"Resource ID","ColumnValue":"ResourceId"},{"ColumnType":"az","ColumnTitle":"NAT Deployment Zone","ColumnValue":"NatAZ"},{"ColumnType":"array.az","ColumnTitle":"Resource Deployment Zone","ColumnValue":"ForwardsAZs"},{"ColumnType":"region","ColumnTitle":"Region","ColumnValue":"RegionNo"}]}
   */
  metadata?: string;
  /**
   * @remarks
   * The cause of the abnormality.
   * 
   * @example
   * Multiple cross-zone resources share a single NAT gateway.
   */
  reason?: string;
  reasonCode?: string;
  /**
   * @remarks
   * The inspection item is abnormal.
   * 
   * @example
   * nat_snat_cross_az_warn
   */
  recommendationCode?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * - **HighRisk**
   * 
   * - **MediumRisk**
   * 
   * - **LowRisk**
   * 
   * - **NoRisk**
   * 
   * @example
   * LowRisk
   */
  riskLevel?: string;
  /**
   * @remarks
   * The optimization suggestions.
   * 
   * @example
   * Deploy NAT gateways in all zones where resources reside.
   */
  suggestion?: string;
  suggestionCode?: string;
  static names(): { [key: string]: string } {
    return {
      abnormality: 'Abnormality',
      metadata: 'Metadata',
      reason: 'Reason',
      reasonCode: 'ReasonCode',
      recommendationCode: 'RecommendationCode',
      riskLevel: 'RiskLevel',
      suggestion: 'Suggestion',
      suggestionCode: 'SuggestionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormality: 'string',
      metadata: 'string',
      reason: 'string',
      reasonCode: 'string',
      recommendationCode: 'string',
      riskLevel: 'string',
      suggestion: 'string',
      suggestionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionReportCheckItemsResponseBodyCheckItemList extends $dara.Model {
  /**
   * @remarks
   * The category of the check item.
   * 
   * @example
   * stability
   */
  categoryCode?: string;
  /**
   * @remarks
   * The code of the check item.
   * 
   * @example
   * item_nat_water_level_check
   */
  checkItemCode?: string;
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * NAT high-availability deployment check
   */
  checkItemName?: string;
  /**
   * @remarks
   * The list of check results that indicates the number of risks at each risk level.
   */
  checkResultList?: DescribeNisInspectionReportCheckItemsResponseBodyCheckItemListCheckResultList[];
  /**
   * @remarks
   * The description of the check item.
   * 
   * @example
   * 无
   */
  description?: string;
  /**
   * @example
   * item_ep_high_availability_check_description
   */
  descriptionCode?: string;
  /**
   * @remarks
   * The list of results for abnormal check items.
   */
  recommendationList?: DescribeNisInspectionReportCheckItemsResponseBodyCheckItemListRecommendationList[];
  /**
   * @remarks
   * The resource type associated with the check item.
   * 
   * @example
   * NAT
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'CategoryCode',
      checkItemCode: 'CheckItemCode',
      checkItemName: 'CheckItemName',
      checkResultList: 'CheckResultList',
      description: 'Description',
      descriptionCode: 'DescriptionCode',
      recommendationList: 'RecommendationList',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'string',
      checkItemCode: 'string',
      checkItemName: 'string',
      checkResultList: { 'type': 'array', 'itemType': DescribeNisInspectionReportCheckItemsResponseBodyCheckItemListCheckResultList },
      description: 'string',
      descriptionCode: 'string',
      recommendationList: { 'type': 'array', 'itemType': DescribeNisInspectionReportCheckItemsResponseBodyCheckItemListRecommendationList },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkResultList)) {
      $dara.Model.validateArray(this.checkResultList);
    }
    if(Array.isArray(this.recommendationList)) {
      $dara.Model.validateArray(this.recommendationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionReportCheckItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of check items.
   */
  checkItemList?: DescribeNisInspectionReportCheckItemsResponseBodyCheckItemList[];
  /**
   * @remarks
   * The ID of the inspection report.
   * 
   * @example
   * nir-ffd1af****196d0
   */
  inspectionReportId?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * hKrS+MVXkuOgztXnvdml194Cz/lMNdmr+DEh0th6dVlNEo/F148UPCh2itDku7Qj
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D5E98683-355B-5867-8D3D-A24755F6895B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 11
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkItemList: 'CheckItemList',
      inspectionReportId: 'InspectionReportId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItemList: { 'type': 'array', 'itemType': DescribeNisInspectionReportCheckItemsResponseBodyCheckItemList },
      inspectionReportId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.checkItemList)) {
      $dara.Model.validateArray(this.checkItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

