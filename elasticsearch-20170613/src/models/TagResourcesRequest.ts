// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * This parameter is required.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * This parameter is required.
   * 
   * @example
   * IT
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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
   * The resource IDs.
   * 
   * This parameter is required.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The resource type. Set this parameter to INSTANCE.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag information.
   * 
   * This parameter is required.
   */
  tags?: TagResourcesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': TagResourcesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

