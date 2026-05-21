// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceRelationshipsResponseBodyResourceRelationships extends $dara.Model {
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the associated resource.
   * 
   * @example
   * vpc-uf6m5okksddm6c9lh7***
   */
  relatedResourceId?: string;
  /**
   * @remarks
   * The region ID of the associated resource.
   * 
   * @example
   * cn-shanghai
   */
  relatedResourceRegionId?: string;
  /**
   * @remarks
   * The type of the associated resource.
   * 
   * @example
   * ACS::VPC::VPC
   */
  relatedResourceType?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * m-eb3hji****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ACS::ACK::Cluster
   */
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
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 682A3004-38E3-5122-9A11-CCDFAB9C3C4F
   */
  requestId?: string;
  /**
   * @remarks
   * The resource relationships.
   */
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

