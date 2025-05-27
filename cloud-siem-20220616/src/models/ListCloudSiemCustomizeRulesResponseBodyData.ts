// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCloudSiemCustomizeRulesResponseBodyDataPageInfo } from "./ListCloudSiemCustomizeRulesResponseBodyDataPageInfo";
import { ListCloudSiemCustomizeRulesResponseBodyDataResponseData } from "./ListCloudSiemCustomizeRulesResponseBodyDataResponseData";


export class ListCloudSiemCustomizeRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListCloudSiemCustomizeRulesResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: ListCloudSiemCustomizeRulesResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListCloudSiemCustomizeRulesResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': ListCloudSiemCustomizeRulesResponseBodyDataResponseData },
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

