// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBgpGroupsResponseBodyBgpGroups } from "./DescribeBgpGroupsResponseBodyBgpGroups";


export class DescribeBgpGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the BGP group.
   */
  bgpGroups?: DescribeBgpGroupsResponseBodyBgpGroups;
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
   * 1D0971B2-A35A-42C1-A44C-E91360C36C0B
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bgpGroups: 'BgpGroups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpGroups: DescribeBgpGroupsResponseBodyBgpGroups,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.bgpGroups && typeof (this.bgpGroups as any).validate === 'function') {
      (this.bgpGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

