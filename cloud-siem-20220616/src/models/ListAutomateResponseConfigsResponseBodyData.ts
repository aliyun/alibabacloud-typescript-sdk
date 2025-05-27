// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAutomateResponseConfigsResponseBodyDataPageInfo } from "./ListAutomateResponseConfigsResponseBodyDataPageInfo";
import { ListAutomateResponseConfigsResponseBodyDataResponseData } from "./ListAutomateResponseConfigsResponseBodyDataResponseData";


export class ListAutomateResponseConfigsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListAutomateResponseConfigsResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: ListAutomateResponseConfigsResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListAutomateResponseConfigsResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': ListAutomateResponseConfigsResponseBodyDataResponseData },
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

