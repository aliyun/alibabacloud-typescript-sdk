// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateResourceRelationsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * This parameter is required.
   * 
   * @example
   * ca-856a626622af0033****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The maximum number of entries to return for a single request. Valid values: 1 to 1000.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AcBjqMYSy0is7zSMGu16****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region in which the resource resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
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
   * The ID of the Alibaba Cloud account to which the resources in the account group belong.
   * 
   * This parameter is required.
   * 
   * @example
   * 100931896542****
   */
  resourceAccountId?: number;
  /**
   * @remarks
   * The resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-j6cajg9yrfoh4sas****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the resource that is associated with the object.
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
      aggregatorId: 'AggregatorId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      region: 'Region',
      relationType: 'RelationType',
      resourceAccountId: 'ResourceAccountId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      targetResourceId: 'TargetResourceId',
      targetResourceType: 'TargetResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      region: 'string',
      relationType: 'string',
      resourceAccountId: 'number',
      resourceId: 'string',
      resourceType: 'string',
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

