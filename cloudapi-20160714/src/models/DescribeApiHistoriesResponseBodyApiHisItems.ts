// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiHistoriesResponseBodyApiHisItemsApiHisItem } from "./DescribeApiHistoriesResponseBodyApiHisItemsApiHisItem";


export class DescribeApiHistoriesResponseBodyApiHisItems extends $dara.Model {
  apiHisItem?: DescribeApiHistoriesResponseBodyApiHisItemsApiHisItem[];
  static names(): { [key: string]: string } {
    return {
      apiHisItem: 'ApiHisItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiHisItem: { 'type': 'array', 'itemType': DescribeApiHistoriesResponseBodyApiHisItemsApiHisItem },
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

