// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag keys.
   * 
   * The following limits apply:
   * 
   * *   The key of tag N cannot be an empty string.
   * *   Valid values of N: 1 to 20.
   * *   The tag key can be up to 128 characters in length.
   * *   The tag key cannot start with `aliyun` or `acs:`.
   * *   The tag key cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag values.
   * 
   * The following limits apply:
   * 
   * *   The value of tag N cannot be an empty string.
   * *   Valid values of N: 1 to 20.
   * *   The tag value can be up to 128 characters in length.
   * *   The tag value cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * yahaha
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
   * The region ID of the Service Mesh (ASM) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the ASM instances.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Set the value to `servicemesh`.
   * 
   * This parameter is required.
   * 
   * @example
   * servicemesh
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
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

