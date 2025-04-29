// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHistoryApisResponseBodyApiHisItemsApiHisItem } from "./DescribeHistoryApisResponseBodyApiHisItemsApiHisItem";


export class DescribeHistoryApisResponseBodyApiHisItems extends $dara.Model {
  apiHisItem?: DescribeHistoryApisResponseBodyApiHisItemsApiHisItem[];
  static names(): { [key: string]: string } {
    return {
      apiHisItem: 'ApiHisItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiHisItem: { 'type': 'array', 'itemType': DescribeHistoryApisResponseBodyApiHisItemsApiHisItem },
    };
  }

  validate() {
    if(Array.isArray(this.apiHisItem)) {
      $dara.Model.validateArray(this.apiHisItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

