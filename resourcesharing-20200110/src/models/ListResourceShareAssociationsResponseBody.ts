// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceShareAssociationsResponseBodyResourceShareAssociationsAssociationFailedDetails extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. The OperationType parameter is used instead.
   * 
   * @example
   * None
   */
  associateType?: string;
  /**
   * @remarks
   * The ID of the entity. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of AssociationType is Resource, the value of this parameter is the ID of the principal.
   * *   If the value of AssociationType is Target, the value of this parameter is the ID of the resource.
   * 
   * @example
   * 172050525300****
   */
  entityId?: string;
  /**
   * @remarks
   * The type of the entity. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of AssociationType is Resource, the value of this parameter is the type of the resource. For information about the types of resources that can be shared, see Services that work with Resource Sharing.
   * *   If the value of AssociationType is Target, the value of this parameter is `ResourceDirectory`, `Folder`, `Account`, or `Service`.
   * 
   * @example
   * Account
   */
  entityType?: string;
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
   * *   Unavailable: The resource does not exist.
   * *   LimitExceeded: The number of principals for the resource exceeds the upper limit.
   * *   ZonalResourceInaccessible: The resource is unavailable in this region.
   * *   InternalError: An internal error occurred.
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
   * This parameter is deprecated. The FailureReason parameter is used instead.
   * 
   * @example
   * None
   */
  status?: string;
  /**
   * @remarks
   * This parameter is deprecated. The FailureDescription parameter is used instead.
   * 
   * @example
   * None
   */
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      associateType: 'AssociateType',
      entityId: 'EntityId',
      entityType: 'EntityType',
      failureDescription: 'FailureDescription',
      failureReason: 'FailureReason',
      operationType: 'OperationType',
      resourceArn: 'ResourceArn',
      status: 'Status',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateType: 'string',
      entityId: 'string',
      entityType: 'string',
      failureDescription: 'string',
      failureReason: 'string',
      operationType: 'string',
      resourceArn: 'string',
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

export class ListResourceShareAssociationsResponseBodyResourceShareAssociations extends $dara.Model {
  /**
   * @remarks
   * The information about the failure.
   */
  associationFailedDetails?: ListResourceShareAssociationsResponseBodyResourceShareAssociationsAssociationFailedDetails[];
  /**
   * @remarks
   * The association status. Valid values:
   * 
   * *   Associating: The entity is being associated.
   * *   Associated: The entity is associated.
   * *   Failed: The entity fails to be associated.
   * *   Disassociating: The entity is being disassociated.
   * *   Disassociated: The entity is disassociated.
   * 
   * >  The system deletes the records of entities in the `Failed` or `Disassociated` state within 48 hours to 96 hours.
   * 
   * @example
   * Associated
   */
  associationStatus?: string;
  /**
   * @remarks
   * The cause of the association failure.
   * 
   * @example
   * The reason for the association failure.
   */
  associationStatusMessage?: string;
  /**
   * @remarks
   * The association type. Valid values:
   * 
   * *   Resource
   * *   Target
   * 
   * @example
   * Resource
   */
  associationType?: string;
  /**
   * @remarks
   * The time when the association of the entity was created. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of `AssociationType` is `Resource`, the value of this parameter is the time when the shared resource was associated with or disassociated from the resource share.
   * *   If the value of `AssociationType` is `Target`, the value of this parameter is the time when the principal was associated with or disassociated from the resource share.
   * 
   * @example
   * 2020-12-07T07:39:01.818Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the entity. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of `AssociationType` is `Resource`, the value of this parameter is the ID of the resource.
   * *   If the value of `AssociationType` is `Target`, the value of this parameter is the ID of the principal.
   * 
   * @example
   * vsw-bp1upw03qyz8n7us9****
   */
  entityId?: string;
  /**
   * @remarks
   * The type of the entity. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of AssociationType is Resource, the value of this parameter is the type of the resource. For information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * *   If the value of AssociationType is Target, the value of this parameter is `Account`.
   * 
   * @example
   * VSwitch
   */
  entityType?: string;
  /**
   * @remarks
   * Indicates whether the principal is outside the resource directory. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  external?: boolean;
  resourceArn?: string;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * @example
   * rs-6GRmdD3X****
   */
  resourceShareId?: string;
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
   * The properties of the principal, such as the time range within which the resource is shared. Valid values of `timeRangeType`:
   * 
   * *   timeRange: a specific time range
   * *   day: all day
   * 
   * >  This parameter is returned only if the principal is an Alibaba Cloud service.
   * 
   * @example
   * {
   *     "timeRange":{
   *         "timeRangeType":"timeRange",
   *         "beginAtTime":"00:00",
   *         "timezone":"UTC+8",
   *         "endAtTime":"19:59"
   *     }
   * }
   */
  targetProperty?: string;
  /**
   * @remarks
   * The time when the association of the entity was updated. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of `AssociationType` is `Resource`, the value of this parameter is the time when the association of the shared resource was updated.
   * *   If the value of `AssociationType` is `Target`, the value of this parameter is the time when the association of the principal was updated.
   * 
   * @example
   * 2020-12-07T07:39:02.920Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      associationFailedDetails: 'AssociationFailedDetails',
      associationStatus: 'AssociationStatus',
      associationStatusMessage: 'AssociationStatusMessage',
      associationType: 'AssociationType',
      createTime: 'CreateTime',
      entityId: 'EntityId',
      entityType: 'EntityType',
      external: 'External',
      resourceArn: 'ResourceArn',
      resourceShareId: 'ResourceShareId',
      resourceShareName: 'ResourceShareName',
      targetProperty: 'TargetProperty',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationFailedDetails: { 'type': 'array', 'itemType': ListResourceShareAssociationsResponseBodyResourceShareAssociationsAssociationFailedDetails },
      associationStatus: 'string',
      associationStatusMessage: 'string',
      associationType: 'string',
      createTime: 'string',
      entityId: 'string',
      entityType: 'string',
      external: 'boolean',
      resourceArn: 'string',
      resourceShareId: 'string',
      resourceShareName: 'string',
      targetProperty: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.associationFailedDetails)) {
      $dara.Model.validateArray(this.associationFailedDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceShareAssociationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The `token` that is used to initiate the next request if the response of the current request is truncated. You can use the token to initiate another request and obtain the remaining records.
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
   * 11BA57B5-7301-4E2F-BBA5-2AE4C2F4FCDB
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the entities.
   */
  resourceShareAssociations?: ListResourceShareAssociationsResponseBodyResourceShareAssociations[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceShareAssociations: 'ResourceShareAssociations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resourceShareAssociations: { 'type': 'array', 'itemType': ListResourceShareAssociationsResponseBodyResourceShareAssociations },
    };
  }

  validate() {
    if(Array.isArray(this.resourceShareAssociations)) {
      $dara.Model.validateArray(this.resourceShareAssociations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

