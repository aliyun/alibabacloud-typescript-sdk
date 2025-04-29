// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIpControlsResponseBodyIpControlInfos } from "./DescribeIpControlsResponseBodyIpControlInfos";


export class DescribeIpControlsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the ACL. The information is an array that consists of IpControlInfo data. The information does not include specific policies.
   */
  ipControlInfos?: DescribeIpControlsResponseBodyIpControlInfos;
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
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipControlInfos: 'IpControlInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlInfos: DescribeIpControlsResponseBodyIpControlInfos,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.ipControlInfos && typeof (this.ipControlInfos as any).validate === 'function') {
      (this.ipControlInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

