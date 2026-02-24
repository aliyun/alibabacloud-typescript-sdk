// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to detach all tags from the resources. Valid values:
   * 
   * - true: Detach all tags from the resources.
   * 
   * - false (default): Detach the specified tags.
   * 
   * @example
   * false
   */
  all?: boolean;
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
   * The IDs of the resources. You can specify a maximum of 50 resource IDs.
   * 
   * You can detach tags from up to 50 resources at a time.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the CloudConfig resource. Valid values:
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
   * The tag keys of the tags to detach.
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

