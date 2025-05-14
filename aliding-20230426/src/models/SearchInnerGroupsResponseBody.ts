// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchInnerGroupsResponseBodyGroupInfos } from "./SearchInnerGroupsResponseBodyGroupInfos";


export class SearchInnerGroupsResponseBody extends $dara.Model {
  groupInfos?: SearchInnerGroupsResponseBodyGroupInfos[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      groupInfos: 'groupInfos',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupInfos: { 'type': 'array', 'itemType': SearchInnerGroupsResponseBodyGroupInfos },
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupInfos)) {
      $dara.Model.validateArray(this.groupInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

