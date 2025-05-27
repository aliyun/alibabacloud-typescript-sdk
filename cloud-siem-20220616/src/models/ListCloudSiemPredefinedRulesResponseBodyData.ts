// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCloudSiemPredefinedRulesResponseBodyDataPageInfo } from "./ListCloudSiemPredefinedRulesResponseBodyDataPageInfo";
import { ListCloudSiemPredefinedRulesResponseBodyDataResponseData } from "./ListCloudSiemPredefinedRulesResponseBodyDataResponseData";


export class ListCloudSiemPredefinedRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListCloudSiemPredefinedRulesResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: ListCloudSiemPredefinedRulesResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListCloudSiemPredefinedRulesResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': ListCloudSiemPredefinedRulesResponseBodyDataResponseData },
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

