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
   * The expiration time of the invitation. The time is displayed in UTC.
   * 
   * @example
   * 2021-01-20T02:15:40Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The invitation ID.
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
   * The note.
   * 
   * @example
   * Welcome to join
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
   * The invitation status. Valid values:
   * 
   * - Pending: pending confirmation
   * - Accepted: accepted
   * - Cancelled: canceled
   * - Declined: declined
   * - Expired: expired
   * 
   * @example
   * Accepted
   */
  status?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID or logon mailbox of the invited Alibaba Cloud account.
   * 
   * @example
   * 177242285274****
   */
  targetEntity?: string;
  /**
   * @remarks
   * The type of the invited Alibaba Cloud account. Valid values:
   * 
   * - Account: the Alibaba Cloud account ID
   * - Email: the logon mailbox of the Alibaba Cloud account
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
   * The invitation information.
   */
  handshake?: AcceptHandshakeResponseBodyHandshake;
  /**
   * @remarks
   * The request ID.
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

