// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceRelationsResponseBodyResourceRelationsResourceRelationList extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 100931896542****
   */
  accountId?: number;
  /**
   * @remarks
   * The type of the relationship between the resource and the object.
   * 
   * Valid values:
   * 
   * *   IsContained: The object is included as part of the resource.
   * *   IsAttachedTo: The object is added to the resource.
   * *   IsAssociatedIn: The object is associated with the resource.
   * *   Contains: The object contains the resource.
   * 
   * @example
   * IsAttachedTo
   */
  relationType?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * i-j6cajg9yrfoh4sas****
   */
  sourceResourceId?: string;
  /**
   * @remarks
   * The ID of the region in which the resource resides.
   * 
   * @example
   * cn-shanghai
   */
  sourceResourceRegionId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ACS::ECS::Instance
   */
  sourceResourceType?: string;
  /**
   * @remarks
   * The ID of the associated resource.
   * 
   * @example
   * d-j6c8k731qbrc7fxi****
   */
  targetResourceId?: string;
  /**
   * @remarks
   * The type of the associated resource.
   * 
   * @example
   * ACS::ECS::Disk
   */
  targetResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      relationType: 'RelationType',
      sourceResourceId: 'SourceResourceId',
      sourceResourceRegionId: 'SourceResourceRegionId',
      sourceResourceType: 'SourceResourceType',
      targetResourceId: 'TargetResourceId',
      targetResourceType: 'TargetResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      relationType: 'string',
      sourceResourceId: 'string',
      sourceResourceRegionId: 'string',
      sourceResourceType: 'string',
      targetResourceId: 'string',
      targetResourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceRelationsResponseBodyResourceRelations extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned on each page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that was used to initiate the next request.
   * 
   * @example
   * C2DjqMYSy0is7zSMGf21****
   */
  nextToken?: string;
  /**
   * @remarks
   * An array that contains the relationships.
   */
  resourceRelationList?: ListResourceRelationsResponseBodyResourceRelationsResourceRelationList[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceRelationList: 'ResourceRelationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceRelationList: { 'type': 'array', 'itemType': ListResourceRelationsResponseBodyResourceRelationsResourceRelationList },
    };
  }

  validate() {
    if(Array.isArray(this.resourceRelationList)) {
      $dara.Model.validateArray(this.resourceRelationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceRelationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6525F8DE-5A8B-5AD3-A241-BBF5A259E5B2
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the relationship.
   */
  resourceRelations?: ListResourceRelationsResponseBodyResourceRelations;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceRelations: 'ResourceRelations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceRelations: ListResourceRelationsResponseBodyResourceRelations,
    };
  }

  validate() {
    if(this.resourceRelations && typeof (this.resourceRelations as any).validate === 'function') {
      (this.resourceRelations as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

