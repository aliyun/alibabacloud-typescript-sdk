// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallCenSummaryListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number for a paged query. The default value is 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The language of the content. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member account.
   * 
   * @example
   * 135809047715****
   */
  memberUid?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The type of the CEN transit router. Valid values:
   * 
   * **Basic**: Basic Edition
   * 
   * **Enterprise**: Enterprise Edition
   * 
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

