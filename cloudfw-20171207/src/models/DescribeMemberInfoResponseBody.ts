// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMemberInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the main account.
   * 
   * @example
   * tianzhuang
   */
  adminName?: string;
  /**
   * @remarks
   * The UID of the main account.
   * 
   * @example
   * 164705101205****
   */
  adminUid?: string;
  /**
   * @remarks
   * Indicates whether the account is one of the member accounts.
   * 
   * @example
   * true
   */
  isMember?: boolean;
  /**
   * @remarks
   * The UID of the member accounts.
   * 
   * @example
   * 128720273643****
   */
  memberUid?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F2665618-3C41-51A4-8DAF-586FB68****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      adminName: 'AdminName',
      adminUid: 'AdminUid',
      isMember: 'IsMember',
      memberUid: 'MemberUid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminName: 'string',
      adminUid: 'string',
      isMember: 'boolean',
      memberUid: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

