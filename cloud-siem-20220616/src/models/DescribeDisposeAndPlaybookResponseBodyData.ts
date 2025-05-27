// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDisposeAndPlaybookResponseBodyDataPageInfo } from "./DescribeDisposeAndPlaybookResponseBodyDataPageInfo";
import { DescribeDisposeAndPlaybookResponseBodyDataResponseData } from "./DescribeDisposeAndPlaybookResponseBodyDataResponseData";


export class DescribeDisposeAndPlaybookResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeDisposeAndPlaybookResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: DescribeDisposeAndPlaybookResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeDisposeAndPlaybookResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': DescribeDisposeAndPlaybookResponseBodyDataResponseData },
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

