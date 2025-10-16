// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallCenSummaryListRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 135809047715****
   */
  memberUid?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * Basic
   */
  transitRouterType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      memberUid: 'MemberUid',
      pageSize: 'PageSize',
      transitRouterType: 'TransitRouterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      lang: 'string',
      memberUid: 'string',
      pageSize: 'string',
      transitRouterType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

