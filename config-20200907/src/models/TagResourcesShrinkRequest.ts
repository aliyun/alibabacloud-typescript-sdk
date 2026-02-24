// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
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
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource in CloudConfig. Valid values:
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
   * You can attach a maximum of 20 tags.
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

