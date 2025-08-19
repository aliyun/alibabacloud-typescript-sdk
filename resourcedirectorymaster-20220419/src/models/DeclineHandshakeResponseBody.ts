// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeclineHandshakeResponseBodyHandshake extends $dara.Model {
  /**
   * @remarks
   * The time when the invitation was created.
   * 
   * @example
   * 2018-08-10T09:55:41Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the invitation expires.
   * 
   * @example
   * 2018-08-10T09:55:41Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The ID of the invitation.
   * 
   * @example
   * h-ycm4rp****
   */
  handshakeId?: string;
  /**
   * @remarks
   * The ID of the management account of the resource directory.
   * 
   * @example
   * 172841235500****
   */
  masterAccountId?: string;
  /**
   * @remarks
   * The name of the management account of the resource directory.
   * 
   * @example
   * Alice
   */
  masterAccountName?: string;
  /**
   * @remarks
   * The time when the invitation was modified.
   * 
   * @example
   * 2018-08-10T09:55:41Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The description of the invitation.
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
   * rd-abcdef****
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
   * Declined
   */
  status?: string;
  /**
   * @remarks
   * The ID or logon email address of the invited account.
   * 
   * @example
   * someone@example.com
   */
  targetEntity?: string;
  /**
   * @remarks
   * The type of the invited account. Valid values:
   * 
   * *   Account: indicates the ID of the account.
   * *   Email: indicates the logon email address of the account.
   * 
   * @example
   * Email
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

export class DeclineHandshakeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the invitation.
   */
  handshake?: DeclineHandshakeResponseBodyHandshake;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9B34724D-54B0-4A51-B34D-4512372FE1BE
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
      handshake: DeclineHandshakeResponseBodyHandshake,
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

