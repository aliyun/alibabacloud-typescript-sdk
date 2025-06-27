// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNisInspectionReportCheckItemsResponseBodyCheckItemListCheckResultList } from "./DescribeNisInspectionReportCheckItemsResponseBodyCheckItemListCheckResultList";
import { DescribeNisInspectionReportCheckItemsResponseBodyCheckItemListRecommendationList } from "./DescribeNisInspectionReportCheckItemsResponseBodyCheckItemListRecommendationList";


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

