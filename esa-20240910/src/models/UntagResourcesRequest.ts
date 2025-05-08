// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * Default value: **false**.
   * 
   * @example
   * false
   */
  all?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the resources reside. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of resource N. Valid values of N: **1** to **50**.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * site
   */
  resourceType?: string;
  securityToken?: string;
  /**
   * @remarks
   * The key of tag N to remove from the resource. Valid values of N: **1** to **20**.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      securityToken: 'SecurityToken',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      securityToken: 'string',
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

