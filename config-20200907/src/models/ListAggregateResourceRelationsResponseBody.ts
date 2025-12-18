// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateResourceRelationsResponseBodyResourceRelationsResourceRelationList extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the resource owner.
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
   * The resource ID of the current resource.
   * 
   * @example
   * i-j6cajg9yrfoh4sas****
   */
  sourceResourceId?: string;
  /**
   * @remarks
   * The region ID of the current resource.
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
   * The resource ID of the resource that is associated with the object.
   * 
   * @example
   * d-j6c8k731qbrc7fxi****
   */
  targetResourceId?: string;
  /**
   * @remarks
   * The type of the resource that is associated with the object.
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

export class ListAggregateResourceRelationsResponseBodyResourceRelations extends $dara.Model {
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
   * AcBjqMYSy0is7zSMGu16****
   */
  nextToken?: string;
  /**
   * @remarks
   * An array that contains the relationships.
   */
  resourceRelationList?: ListAggregateResourceRelationsResponseBodyResourceRelationsResourceRelationList[];
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
      resourceRelationList: { 'type': 'array', 'itemType': ListAggregateResourceRelationsResponseBodyResourceRelationsResourceRelationList },
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

export class ListAggregateResourceRelationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7A25F9DE-4C8B-5AD3-A241-FFF5A259E5A1
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the relationship.
   */
  resourceRelations?: ListAggregateResourceRelationsResponseBodyResourceRelations;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceRelations: 'ResourceRelations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceRelations: ListAggregateResourceRelationsResponseBodyResourceRelations,
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

