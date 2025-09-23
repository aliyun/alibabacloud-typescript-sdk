// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AcceptResourceShareInvitationResponseBodyResourceShareInvitationAcceptInvitationFailedDetails extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. The OperationType parameter is used instead.
   * 
   * @example
   * Associate
   */
  associateType?: string;
  /**
   * @remarks
   * The failure description.
   * 
   * @example
   * You cannot access the specified resource at this time.
   */
  failureDescription?: string;
  /**
   * @remarks
   * The failure cause. Valid values:
   * 
   * *   Unavailable: The resource cannot be shared.
   * *   LimitExceeded: The number of shared resources within the Alibaba Cloud account exceeds the upper limit.
   * *   ZonalResourceInaccessible: The resource is unavailable in this region.
   * *   InternalError: An internal error occurred during the check.
   * 
   * @example
   * Unavailable
   */
  failureReason?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * *   Associate
   * 
   * @example
   * Associate
   */
  operationType?: string;
  resourceArn?: string;
  /**
   * @remarks
   * The ID of the shared resource.
   * 
   * @example
   * s-7xvh46nx5oqlre0wv***
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the shared resource.
   * 
   * For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * 
   * @example
   * Snapshot
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is deprecated. The FailureReason parameter is used instead.
   * 
   * @example
   * Unavailable
   */
  status?: string;
  /**
   * @remarks
   * This parameter is deprecated. The FailureDescription parameter is used instead.
   * 
   * @example
   * You cannot access the specified resource at this time.
   */
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      associateType: 'AssociateType',
      failureDescription: 'FailureDescription',
      failureReason: 'FailureReason',
      operationType: 'OperationType',
      resourceArn: 'ResourceArn',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      status: 'Status',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateType: 'string',
      failureDescription: 'string',
      failureReason: 'string',
      operationType: 'string',
      resourceArn: 'string',
      resourceId: 'string',
      resourceType: 'string',
      status: 'string',
      statusMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptResourceShareInvitationResponseBodyResourceShareInvitation extends $dara.Model {
  /**
   * @remarks
   * The information about the failure.
   */
  acceptInvitationFailedDetails?: AcceptResourceShareInvitationResponseBodyResourceShareInvitationAcceptInvitationFailedDetails[];
  /**
   * @remarks
   * The time when the invitation was created. The time is displayed in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-02T06:43:12.353Z
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
   * rs-ysGRci9z****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The ID of the resource sharing invitation.
   * 
   * This parameter is required.
   * 
   * @example
   * i-pMnItMX19fBJ****
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
   * *   Pending
   * *   Accepted
   * *   Cancelled
   * *   Rejected
   * *   Expired
   * *   AcceptFailed
   * 
   * This parameter is required.
   * 
   * @example
   * AcceptFailed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      acceptInvitationFailedDetails: 'AcceptInvitationFailedDetails',
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
      acceptInvitationFailedDetails: { 'type': 'array', 'itemType': AcceptResourceShareInvitationResponseBodyResourceShareInvitationAcceptInvitationFailedDetails },
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
    if(Array.isArray(this.acceptInvitationFailedDetails)) {
      $dara.Model.validateArray(this.acceptInvitationFailedDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptResourceShareInvitationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 08F18B04-47CB-5C0E-A6D2-37DEF5C2A961
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resource sharing invitation.
   */
  resourceShareInvitation?: AcceptResourceShareInvitationResponseBodyResourceShareInvitation;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceShareInvitation: 'ResourceShareInvitation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceShareInvitation: AcceptResourceShareInvitationResponseBodyResourceShareInvitation,
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

