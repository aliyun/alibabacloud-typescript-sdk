// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. The tag key can be up to 128 characters in length.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. The tag value can be up to 256 characters in length.
   * 
   * @example
   * v1
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
   * The names of the resources. You can specify up to 50 resource names.
   */
  resourceNames?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * Enumerated values:
   * 
   * *   role: RAM roles.
   * *   policy: policies.
   * 
   * @example
   * role
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags. You can specify up to 20 tags.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceNames: 'ResourceNames',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceNames: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceNames)) {
      $dara.Model.validateArray(this.resourceNames);
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

