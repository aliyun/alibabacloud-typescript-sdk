// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateResourceRelationsResponseBodyResourceRelationsResourceRelationList extends $dara.Model {
  accountId?: number;
  relationType?: string;
  sourceResourceId?: string;
  sourceResourceRegionId?: string;
  sourceResourceType?: string;
  targetResourceId?: string;
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
  maxResults?: number;
  nextToken?: string;
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
  requestId?: string;
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

