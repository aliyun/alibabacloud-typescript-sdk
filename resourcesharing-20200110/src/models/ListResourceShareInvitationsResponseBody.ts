// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceShareInvitationsResponseBodyResourceShareInvitationsInvitationFailedDetails extends $dara.Model {
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
   * *   UnsupportedOperation: You cannot perform this operation.
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
   * *   Disassociate
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

export class ListResourceShareInvitationsResponseBodyResourceShareInvitations extends $dara.Model {
  /**
   * @remarks
   * The time when the invitation was created. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-18T05:36:45.024Z
   */
  createTime?: string;
  /**
   * @remarks
   * The information about the failure.
   */
  invitationFailedDetails?: ListResourceShareInvitationsResponseBodyResourceShareInvitationsInvitationFailedDetails[];
  /**
   * @remarks
   * The Alibaba Cloud account ID of the invitee.
   * 
   * @example
   * 134254031178****
   */
  receiverAccountId?: string;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * @example
   * rs-ysGRci9z****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The ID of the invitation.
   * 
   * @example
   * i-p6eRytrkjVvM****
   */
  resourceShareInvitationId?: string;
  /**
   * @remarks
   * The name of the resource share.
   * 
   * @example
   * example
   */
  resourceShareName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the inviter.
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
   * @example
   * Pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      invitationFailedDetails: 'InvitationFailedDetails',
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
      invitationFailedDetails: { 'type': 'array', 'itemType': ListResourceShareInvitationsResponseBodyResourceShareInvitationsInvitationFailedDetails },
      receiverAccountId: 'string',
      resourceShareId: 'string',
      resourceShareInvitationId: 'string',
      resourceShareName: 'string',
      senderAccountId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.invitationFailedDetails)) {
      $dara.Model.validateArray(this.invitationFailedDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceShareInvitationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30EC8328-1BDE-51D5-BFAB-039508BD91A1
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resource sharing invitations.
   */
  resourceShareInvitations?: ListResourceShareInvitationsResponseBodyResourceShareInvitations[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceShareInvitations: 'ResourceShareInvitations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resourceShareInvitations: { 'type': 'array', 'itemType': ListResourceShareInvitationsResponseBodyResourceShareInvitations },
    };
  }

  validate() {
    if(Array.isArray(this.resourceShareInvitations)) {
      $dara.Model.validateArray(this.resourceShareInvitations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

