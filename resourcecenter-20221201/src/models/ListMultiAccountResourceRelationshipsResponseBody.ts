// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultiAccountResourceRelationshipsResponseBodyResourceRelationships extends $dara.Model {
  accountId?: string;
  regionId?: string;
  relatedResourceId?: string;
  relatedResourceRegionId?: string;
  relatedResourceType?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      regionId: 'RegionId',
      relatedResourceId: 'RelatedResourceId',
      relatedResourceRegionId: 'RelatedResourceRegionId',
      relatedResourceType: 'RelatedResourceType',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      regionId: 'string',
      relatedResourceId: 'string',
      relatedResourceRegionId: 'string',
      relatedResourceType: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiAccountResourceRelationshipsResponseBody extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  resourceRelationships?: ListMultiAccountResourceRelationshipsResponseBodyResourceRelationships[];
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceRelationships: 'ResourceRelationships',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resourceRelationships: { 'type': 'array', 'itemType': ListMultiAccountResourceRelationshipsResponseBodyResourceRelationships },
      scope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceRelationships)) {
      $dara.Model.validateArray(this.resourceRelationships);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

