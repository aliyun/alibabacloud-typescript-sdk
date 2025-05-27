// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEntitiesResponseBodyDataPageInfo } from "./ListEntitiesResponseBodyDataPageInfo";
import { ListEntitiesResponseBodyDataResponseData } from "./ListEntitiesResponseBodyDataResponseData";


export class ListEntitiesResponseBodyData extends $dara.Model {
  pageInfo?: ListEntitiesResponseBodyDataPageInfo;
  responseData?: ListEntitiesResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListEntitiesResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': ListEntitiesResponseBodyDataResponseData },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.responseData)) {
      $dara.Model.validateArray(this.responseData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

