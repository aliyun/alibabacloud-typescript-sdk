// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

