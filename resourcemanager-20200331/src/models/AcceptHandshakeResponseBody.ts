// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AcceptHandshakeResponseBodyHandshake extends $dara.Model {
  /**
   * @remarks
   * The time when the invitation was created. The time is displayed in UTC.
   * 
   * @example
   * 2021-01-06T02:15:40Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the invitation expires. The time is displayed in UTC.
   * 
   * @example
   * 2021-01-20T02:15:40Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The ID of the invitation.
   * 
   * @example
   * h-Ih8IuPfvV0t0****
   */
  handshakeId?: string;
  /**
   * @remarks
   * The ID of the management account of the resource directory.
   * 
   * @example
   * 151266687691****
   */
  masterAccountId?: string;
  /**
   * @remarks
   * The name of the management account of the resource directory.
   * 
   * @example
   * CompanyA
   */
  masterAccountName?: string;
  /**
   * @remarks
   * The time when the invitation was modified. The time is displayed in UTC.
   * 
   * @example
   * 2021-01-06T02:16:40Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The comment on the invitation.
   * 
   * @example
   * Welcome
   */
  note?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-3G****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The status of the invitation. Valid values:
   * 
   * *   Pending: The invitation is waiting for confirmation.
   * *   Accepted: The invitation is accepted.
   * *   Cancelled: The invitation is canceled.
   * *   Declined: The invitation is rejected.
   * *   Expired: The invitation expires.
   * 
   * @example
   * Accepted
   */
  status?: string;
  /**
   * @remarks
   * The ID or logon email address of the invited Alibaba Cloud account.
   * 
   * @example
   * 177242285274****
   */
  targetEntity?: string;
  /**
   * @remarks
   * The type of the invited Alibaba Cloud account. Valid values:
   * 
   * *   Account: indicates the ID of the Alibaba Cloud account.
   * *   Email: indicates the logon email address of the Alibaba Cloud account.
   * 
   * @example
   * Account
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      handshakeId: 'HandshakeId',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      modifyTime: 'ModifyTime',
      note: 'Note',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      handshakeId: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      modifyTime: 'string',
      note: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      targetEntity: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptHandshakeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the invitation.
   */
  handshake?: AcceptHandshakeResponseBodyHandshake;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5828C836-3286-49A6-9006-15231BB19342
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      handshake: 'Handshake',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshake: AcceptHandshakeResponseBodyHandshake,
      requestId: 'string',
    };
  }

  validate() {
    if(this.handshake && typeof (this.handshake as any).validate === 'function') {
      (this.handshake as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

