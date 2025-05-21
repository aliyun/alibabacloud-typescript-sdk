// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeCategoryListDBNodeCategory } from "./DescribeRdsAnalysisResourceQuotasResponseBodyDbnodeCategoryListDbnodeCategory";


export class DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeCategoryList extends $dara.Model {
  DBNodeCategory?: DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeCategoryListDBNodeCategory[];
  static names(): { [key: string]: string } {
    return {
      DBNodeCategory: 'DBNodeCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeCategory: { 'type': 'array', 'itemType': DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeCategoryListDBNodeCategory },
    };
  }

  validate() {
    if(Array.isArray(this.DBNodeCategory)) {
      $dara.Model.validateArray(this.DBNodeCategory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

