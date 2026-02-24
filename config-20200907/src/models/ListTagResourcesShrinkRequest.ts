// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The token to retrieve the next page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJ****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region to which the tags belong.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * You can query tags for a maximum of 50 resources.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type in CloudConfig. Valid values:
   * 
   * - `ACS::Config::Rule`: a rule for a single account.
   * 
   * - `ACS::Config::AggregateConfigRule`: a rule for multiple accounts.
   * 
   * - `ACS::Config::Aggregator`: an account group.
   * 
   * - `ACS::Config::CompliancePack`: a compliance package for a single account.
   * 
   * - `ACS::Config::AggregateCompliancePack`: a compliance package for multiple accounts.
   * 
   * This parameter is required.
   * 
   * @example
   * ACS::Config::Rule
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags of the resource.
   * 
   * You can filter resources by a maximum of 20 tags.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

