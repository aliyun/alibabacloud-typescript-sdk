// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateResourceRelationsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aggregatorId?: string;
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  region?: string;
  relationType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceAccountId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceType?: string;
  targetResourceId?: string;
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

