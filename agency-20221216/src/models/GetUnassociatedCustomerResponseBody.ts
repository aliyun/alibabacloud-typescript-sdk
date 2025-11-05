// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUnassociatedCustomerResponseBodyInviteInfoListInviteInfo extends $dara.Model {
  /**
   * @remarks
   * The name of Customer who are to be invited.
   * 
   * @example
   * My Client
   */
  accountNickname?: string;
  /**
   * @remarks
   * The Email of Customer who are to be invited.
   * 
   * @example
   * 12345@qq.com
   */
  email?: string;
  /**
   * @remarks
   * The time of email been sent out.
   * 
   * @example
   * 2023-05-10
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Invitation ID
   * 
   * @example
   * 190
   */
  inviteId?: number;
  /**
   * @remarks
   * Invitation Status:
   * * 0 No visit on registration URL
   * * 1 Successful Registration
   * * 2 Unsuccessful Registration
   * * 3 Registration URL have been visited, but no submitted sheet/ticket.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      accountNickname: 'AccountNickname',
      email: 'Email',
      gmtCreate: 'GmtCreate',
      inviteId: 'InviteId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNickname: 'string',
      email: 'string',
      gmtCreate: 'string',
      inviteId: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnassociatedCustomerResponseBodyInviteInfoList extends $dara.Model {
  inviteInfo?: GetUnassociatedCustomerResponseBodyInviteInfoListInviteInfo[];
  static names(): { [key: string]: string } {
    return {
      inviteInfo: 'InviteInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inviteInfo: { 'type': 'array', 'itemType': GetUnassociatedCustomerResponseBodyInviteInfoListInviteInfo },
    };
  }

  validate() {
    if(Array.isArray(this.inviteInfo)) {
      $dara.Model.validateArray(this.inviteInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnassociatedCustomerResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * Pagination, current page.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Pagination, record number on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Pagination, page volume in total.
   * 
   * @example
   * 12
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnassociatedCustomerResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error Code, Candidate Value：
   * * 200: OK
   * * 1109: System error
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * List of Invitation Information
   */
  inviteInfoList?: GetUnassociatedCustomerResponseBodyInviteInfoList;
  /**
   * @remarks
   * Message information
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Pagination Information
   */
  pageInfo?: GetUnassociatedCustomerResponseBodyPageInfo;
  /**
   * @remarks
   * Request ID, Alibaba Cloud will track errors with this.
   * 
   * @example
   * 23309219-4A34-589D-A3E0-9B2A3BFFD24F
   */
  requestId?: string;
  /**
   * @remarks
   * Candidate Value: True/False, which indicates whether the current API call itself is successful. It does not guarantee the success of subsequent business operations.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      inviteInfoList: 'InviteInfoList',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      inviteInfoList: GetUnassociatedCustomerResponseBodyInviteInfoList,
      message: 'string',
      pageInfo: GetUnassociatedCustomerResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.inviteInfoList && typeof (this.inviteInfoList as any).validate === 'function') {
      (this.inviteInfoList as any).validate();
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

