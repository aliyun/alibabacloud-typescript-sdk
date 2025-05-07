// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetBusinessCategoryListResponseBodyDataBusinessCategoryBasicInfo } from "./GetBusinessCategoryListResponseBodyDataBusinessCategoryBasicInfo";


export class GetBusinessCategoryListResponseBodyData extends $dara.Model {
  businessCategoryBasicInfo?: GetBusinessCategoryListResponseBodyDataBusinessCategoryBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      businessCategoryBasicInfo: 'BusinessCategoryBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategoryBasicInfo: { 'type': 'array', 'itemType': GetBusinessCategoryListResponseBodyDataBusinessCategoryBasicInfo },
    };
  }

  validate() {
    if(Array.isArray(this.businessCategoryBasicInfo)) {
      $dara.Model.validateArray(this.businessCategoryBasicInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

