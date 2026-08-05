// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnTagLiveResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete all tags. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
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
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID. The live streaming domain name. Valid values of N: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Enumeration type.
   * 
   * This parameter is required.
   * 
   * @example
   * DOMAIN
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key. Valid values of N: **1 to 20**.
   * 
   * @example
   * env
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
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

