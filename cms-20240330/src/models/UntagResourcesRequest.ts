// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the specified resources. Valid values:
   * 
   * false (default): No
   * true: Yes
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * A list of resource IDs.
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
   * Service
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * You can detach tags with up to 20 tag keys.
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

