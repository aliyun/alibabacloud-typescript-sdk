// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiTrafficControlsResponseBodyApiTrafficControls } from "./DescribeApiTrafficControlsResponseBodyApiTrafficControls";


export class DescribeApiTrafficControlsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned throttling policy information. It is an array consisting of ApiTrafficControlItem data.
   */
  apiTrafficControls?: DescribeApiTrafficControlsResponseBodyApiTrafficControls;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ004
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiTrafficControls: 'ApiTrafficControls',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiTrafficControls: DescribeApiTrafficControlsResponseBodyApiTrafficControls,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.apiTrafficControls && typeof (this.apiTrafficControls as any).validate === 'function') {
      (this.apiTrafficControls as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

