// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInviteStatusResponseBodyDataInviteStatusInviteStatusList extends $dara.Model {
  associationSuccessTime?: string;
  cid?: number;
  gmtCreate?: string;
  parentId?: string;
  status?: number;
  subAccountType?: string;
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
  code?: string;
  inviteStatusList?: GetInviteStatusResponseBodyDataInviteStatusInviteStatusList;
  message?: string;
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

