// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RejectResourceShareInvitationResponseBodyResourceShareInvitation extends $dara.Model {
  /**
   * @remarks
   * The time when the invitation was created. The time is displayed in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-02T07:07:30.809Z
   */
  createTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the invitee.
   * 
   * This parameter is required.
   * 
   * @example
   * 134254031178****
   */
  receiverAccountId?: string;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * This parameter is required.
   * 
   * @example
   * rs-JoA1Ayjm****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The ID of the invitation.
   * 
   * This parameter is required.
   * 
   * @example
   * i-yyTWbkjHArYh****
   */
  resourceShareInvitationId?: string;
  /**
   * @remarks
   * The name of the resource share.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  resourceShareName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the inviter.
   * 
   * This parameter is required.
   * 
   * @example
   * 151266687691****
   */
  senderAccountId?: string;
  /**
   * @remarks
   * The status of the invitation. Valid values:
   * 
   * *   Pending: The invitation is waiting for confirmation.
   * *   Accepted: The invitation is accepted.
   * *   Cancelled: The invitation is canceled.
   * *   Rejected: The invitation is rejected.
   * *   Expired: The invitation has expired.
   * 
   * This parameter is required.
   * 
   * @example
   * Rejected
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      receiverAccountId: 'ReceiverAccountId',
      resourceShareId: 'ResourceShareId',
      resourceShareInvitationId: 'ResourceShareInvitationId',
      resourceShareName: 'ResourceShareName',
      senderAccountId: 'SenderAccountId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      receiverAccountId: 'string',
      resourceShareId: 'string',
      resourceShareInvitationId: 'string',
      resourceShareName: 'string',
      senderAccountId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectResourceShareInvitationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E446D6DE-BFC8-5F37-A494-33D7B118147D
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the resource sharing invitation.
   */
  resourceShareInvitation?: RejectResourceShareInvitationResponseBodyResourceShareInvitation;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceShareInvitation: 'ResourceShareInvitation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceShareInvitation: RejectResourceShareInvitationResponseBodyResourceShareInvitation,
    };
  }

  validate() {
    if(this.resourceShareInvitation && typeof (this.resourceShareInvitation as any).validate === 'function') {
      (this.resourceShareInvitation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

