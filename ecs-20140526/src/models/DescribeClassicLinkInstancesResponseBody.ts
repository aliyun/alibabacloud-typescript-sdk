// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClassicLinkInstancesResponseBodyLinks } from "./DescribeClassicLinkInstancesResponseBodyLinks";


export class DescribeClassicLinkInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the ClassicLink connections between the instances reside in the classic network and VPCs.
   */
  links?: DescribeClassicLinkInstancesResponseBodyLinks;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of ClassicLink connections.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      links: 'Links',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      links: DescribeClassicLinkInstancesResponseBodyLinks,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.links && typeof (this.links as any).validate === 'function') {
      (this.links as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

