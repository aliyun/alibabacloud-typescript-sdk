// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInviteStatusResponseBodyDataInviteStatusInviteStatusList extends $dara.Model {
  /**
   * @remarks
   * The time that Distribution Customer successfully associated with Distributor.</br>
   * This value will be empty if there is no existing association.
   * 
   * @example
   * 2018-02-13
   */
  associationSuccessTime?: string;
  /**
   * @remarks
   * Distribution Customer\\"s CID
   * 
   * @example
   * 1234567890123
   */
  cid?: number;
  /**
   * @remarks
   * The time of email been sent out.
   * 
   * @example
   * 2018-02-12
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The parent organization ID.
   * 
   * @example
   * 1093238769140523
   */
  parentId?: string;
  /**
   * @remarks
   * Invitation Status:
   * * 0 No visit on registration URL
   * * 1 Successful Registration
   * * 2 Unsuccessful Registration
   * * 3 Registration URL have been visited, but no submitted sheet/ticket.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * Account Type:
   * - 1 Agency\\"s End User
   * - 2 Reseller\\"s End User
   * - 5 T2 Reseller Partner
   * 
   * @example
   * 1
   */
  subAccountType?: string;
  /**
   * @remarks
   * Distribution Customer\\"s UID
   * 
   * @example
   * 1234567890123
   */
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      associationSuccessTime: 'AssociationSuccessTime',
      cid: 'Cid',
      gmtCreate: 'GmtCreate',
      parentId: 'ParentId',
      status: 'Status',
      subAccountType: 'SubAccountType',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationSuccessTime: 'string',
      cid: 'number',
      gmtCreate: 'string',
      parentId: 'string',
      status: 'number',
      subAccountType: 'string',
      uid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInviteStatusResponseBodyDataInviteStatus extends $dara.Model {
  /**
   * @remarks
   * Result Code. Value Range:
   * *   200 OK
   * *   1109 system error
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * List of Invitation Status result
   */
  inviteStatusList?: GetInviteStatusResponseBodyDataInviteStatusInviteStatusList;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * success
   */
  message?: string;
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
      inviteStatusList: 'InviteStatusList',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      inviteStatusList: GetInviteStatusResponseBodyDataInviteStatusInviteStatusList,
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.inviteStatusList && typeof (this.inviteStatusList as any).validate === 'function') {
      (this.inviteStatusList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInviteStatusResponseBodyData extends $dara.Model {
  inviteStatus?: GetInviteStatusResponseBodyDataInviteStatus[];
  static names(): { [key: string]: string } {
    return {
      inviteStatus: 'InviteStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inviteStatus: { 'type': 'array', 'itemType': GetInviteStatusResponseBodyDataInviteStatus },
    };
  }

  validate() {
    if(Array.isArray(this.inviteStatus)) {
      $dara.Model.validateArray(this.inviteStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInviteStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status Code. Error Code:
   * 
   * - 3057 InviteId is empty
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetInviteStatusResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID, Alibaba Cloud will track errors with this.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
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
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetInviteStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

