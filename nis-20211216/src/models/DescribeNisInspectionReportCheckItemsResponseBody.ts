// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisInspectionReportCheckItemsResponseBodyCheckItemListCheckResultList extends $dara.Model {
  /**
   * @example
   * 0
   */
  count?: number;
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
  abnormality?: string;
  metadata?: string;
  reason?: string;
  reasonCode?: string;
  /**
   * @example
   * nat_snat_cross_az_warn
   */
  recommendationCode?: string;
  riskLevel?: string;
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
   * @example
   * stability
   */
  categoryCode?: string;
  /**
   * @example
   * item_nat_water_level_check
   */
  checkItemCode?: string;
  checkItemName?: string;
  checkResultList?: DescribeNisInspectionReportCheckItemsResponseBodyCheckItemListCheckResultList[];
  description?: string;
  /**
   * @example
   * item_ep_high_availability_check_description
   */
  descriptionCode?: string;
  recommendationList?: DescribeNisInspectionReportCheckItemsResponseBodyCheckItemListRecommendationList[];
  /**
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
  checkItemList?: DescribeNisInspectionReportCheckItemsResponseBodyCheckItemList[];
  /**
   * @example
   * nir-ffd1af****196d0
   */
  inspectionReportId?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * hKrS+MVXkuOgztXnvdml194Cz/lMNdmr+DEh0th6dVlNEo/F148UPCh2itDku7Qj
   */
  nextToken?: string;
  /**
   * @example
   * D5E98683-355B-5867-8D3D-A24755F6895B
   */
  requestId?: string;
  /**
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

