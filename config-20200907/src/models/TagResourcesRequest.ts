// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * You can attach a maximum of 20 tag keys.
   * 
   * @example
   * Env
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * You can attach a maximum of 20 tag values.
   * 
   * @example
   * prod
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
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
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

