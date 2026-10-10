// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the resources. This parameter and TagKey are mutually exclusive.
   */
  all?: boolean;
  /**
   * @remarks
   * The list of data catalog IDs from which to remove tags. The value is a JSON array. Maximum: 50.
   * 
   * This parameter is required.
   * 
   * @example
   * ["clg-paimon-0424965be0c240acb4159688c9e2c4b6"]
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid value: CATALOGRESOURCE.
   * 
   * This parameter is required.
   * 
   * @example
   * CATALOGRESOURCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tag keys to remove. The value is a JSON array. This parameter and All are mutually exclusive.
   * 
   * @example
   * ["team"]
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tagKey: 'tagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
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

