// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the tags.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs. You can add tags to up to 50 resources.
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
   * The tag value of the resource.
   * 
   * You can specify up to 20 tag values.
   * 
   * This parameter is required.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

