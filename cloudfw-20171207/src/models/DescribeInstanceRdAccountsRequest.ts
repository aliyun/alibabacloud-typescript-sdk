// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceRdAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The language type for the request and response messages.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The remarks of the Cloud Firewall member accounts.
   * 
   * @example
   * renewal
   */
  memberDesc?: string;
  /**
   * @remarks
   * The name of the Cloud Firewall member accounts.
   * 
   * @example
   * cloudfirewall_2
   */
  memberDisplayName?: string;
  /**
   * @remarks
   * The UID of the member accounts.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The IP address of the requester.
   * 
   * @example
   * 47.100.170.XXX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      memberDesc: 'MemberDesc',
      memberDisplayName: 'MemberDisplayName',
      memberUid: 'MemberUid',
      pageSize: 'PageSize',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      lang: 'string',
      memberDesc: 'string',
      memberDisplayName: 'string',
      memberUid: 'string',
      pageSize: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

