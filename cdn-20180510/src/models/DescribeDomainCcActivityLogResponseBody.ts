// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainCcActivityLogResponseBodyActivityLog } from "./DescribeDomainCcActivityLogResponseBodyActivityLog";


export class DescribeDomainCcActivityLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of rate limiting logs.
   */
  activityLog?: DescribeDomainCcActivityLogResponseBodyActivityLog[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      activityLog: 'ActivityLog',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityLog: { 'type': 'array', 'itemType': DescribeDomainCcActivityLogResponseBodyActivityLog },
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.activityLog)) {
      $dara.Model.validateArray(this.activityLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

