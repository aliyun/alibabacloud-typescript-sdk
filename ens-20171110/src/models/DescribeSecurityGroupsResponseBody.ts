// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecurityGroupsResponseBodySecurityGroups } from "./DescribeSecurityGroupsResponseBodySecurityGroups";


export class DescribeSecurityGroupsResponseBody extends $dara.Model {
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
   * Details about security groups.
   */
  securityGroups?: DescribeSecurityGroupsResponseBodySecurityGroups;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 49
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      securityGroups: 'SecurityGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      securityGroups: DescribeSecurityGroupsResponseBodySecurityGroups,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.securityGroups && typeof (this.securityGroups as any).validate === 'function') {
      (this.securityGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

