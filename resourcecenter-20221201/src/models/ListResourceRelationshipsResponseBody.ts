// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceRelationshipsResponseBodyResourceRelationships extends $dara.Model {
  regionId?: string;
  relatedResourceId?: string;
  relatedResourceRegionId?: string;
  relatedResourceType?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
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

export class ListResourceRelationshipsResponseBody extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  resourceRelationships?: ListResourceRelationshipsResponseBodyResourceRelationships[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceRelationships: 'ResourceRelationships',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resourceRelationships: { 'type': 'array', 'itemType': ListResourceRelationshipsResponseBodyResourceRelationships },
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

