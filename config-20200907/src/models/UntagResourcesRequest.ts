// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the resource. Valid values:
   * 
   * *   true: All tags are removed from the resource.
   * *   false (default): The specified tags are removed from the resource.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The region ID of the tag.
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
   * You can remove tags from up to 50 resources at a time.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   `ACS::Config::Rule`
   * *   `ACS::Config::AggregateConfigRule`
   * *   `ACS::Config::Aggregator`
   * *   `ACS::Config::CompliancePack`
   * *   `ACS::Config::AggregateCompliancePack`
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
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

