// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. Format requirements are as follows:
   * 
   * - The length must be 1 to 128 characters.
   * - It cannot contain "http://" or "https://".
   * - It cannot start with "acs:" or "aliyun".
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Format requirements are as follows:
   * 
   * - The length must be 1 to 128 characters.
   * - It cannot contain "http://" or "https://".
   * 
   * @example
   * value1
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
   * The list of resource IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["space-a","space-b"]
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Set the value to agentspace.
   * 
   * This parameter is required.
   * 
   * @example
   * agentspace
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags. You can specify up to 20 tag key-value pairs at a time.
   * 
   * @example
   * [{
   * 	"key": "key1",
   * 	"value": "value1"
   * }]
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

