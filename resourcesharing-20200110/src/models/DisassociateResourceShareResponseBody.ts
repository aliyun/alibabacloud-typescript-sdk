// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisassociateResourceShareResponseBodyResourceShareAssociations extends $dara.Model {
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
   * Disassociating
   */
  associationStatus?: string;
  /**
   * @remarks
   * The cause of the disassociation failure.
   * 
   * @example
   * The Resources is invalid.
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
   * Target
   */
  associationType?: string;
  /**
   * @remarks
   * The time when the disassociation of the entity was performed. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of `AssociationType` is `Resource`, the value of this parameter is the time when the resource was disassociated from the resource share.
   * *   If the value of `AssociationType` is `Target`, the value of this parameter is the time when the principal was disassociated from the resource share.
   * 
   * @example
   * 2020-12-04T09:40:41.250Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the entity. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of `AssociationType` is `Resource`, the value of this parameter is the ID of the resource.
   * *   If the value of `AssociationType` is `Target`, the value of this parameter is the ID of the resource directory, folder, member, or Alibaba Cloud service.
   * 
   * @example
   * 172050525300****
   */
  entityId?: string;
  /**
   * @remarks
   * The type of the entity. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of AssociationType is Resource, the value of this parameter is the type of the resource. For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * *   If the value of AssociationType is Target, the value of this parameter is Account.
   * 
   * @example
   * Account
   */
  entityType?: string;
  resourceArn?: string;
  /**
   * @example
   * {"sharePrincipals":true,"shareTagOptions":false}
   */
  resourceProperty?: string;
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
   * test
   */
  resourceShareName?: string;
  /**
   * @remarks
   * The properties of the principal, such as the time range within which the resource is shared.
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
   * The time when the disassociation of the entity was updated. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of `AssociationType` is `Resource`, the value of this parameter is the time when the disassociation of the resource was updated.
   * *   If the value of `AssociationType` is `Target`, the value of this parameter is the time when the disassociation of the principal was updated.
   * 
   * @example
   * 2020-12-04T09:40:45.556Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      associationStatus: 'AssociationStatus',
      associationStatusMessage: 'AssociationStatusMessage',
      associationType: 'AssociationType',
      createTime: 'CreateTime',
      entityId: 'EntityId',
      entityType: 'EntityType',
      resourceArn: 'ResourceArn',
      resourceProperty: 'ResourceProperty',
      resourceShareId: 'ResourceShareId',
      resourceShareName: 'ResourceShareName',
      targetProperty: 'TargetProperty',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationStatus: 'string',
      associationStatusMessage: 'string',
      associationType: 'string',
      createTime: 'string',
      entityId: 'string',
      entityType: 'string',
      resourceArn: 'string',
      resourceProperty: 'string',
      resourceShareId: 'string',
      resourceShareName: 'string',
      targetProperty: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateResourceShareResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 95230BC9-A8E8-4493-96BD-4F0C758E37F8
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the entities that are associated with the resource share.
   */
  resourceShareAssociations?: DisassociateResourceShareResponseBodyResourceShareAssociations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceShareAssociations: 'ResourceShareAssociations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceShareAssociations: { 'type': 'array', 'itemType': DisassociateResourceShareResponseBodyResourceShareAssociations },
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

