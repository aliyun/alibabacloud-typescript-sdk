// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * > - The tag key cannot be an empty string. It can be up to 128 characters in length.
   * >
   * > - The tag key cannot start with **aliyun** or **acs:**. It cannot contain **http\\://** or **https\\://**.
   * 
   * @example
   * operation
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * > - The tag value can be an empty string. It can be up to 128 characters in length.
   * >
   * > - The tag value cannot start with **aliyun** or **acs:**. It cannot contain **http\\://** or **https\\://**.
   * 
   * @example
   * operation_test
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
   * The ID of the region where the Bastionhost instance resides.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the Bastionhost instances. You can specify up to 20 instance IDs.
   * 
   * N can be from 1 to 20.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the IDs of Bastionhost instances.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-78v1gc****
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource.
   * 
   * Set the value to `INSTANCE`. This value indicates a Bastionhost instance.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags to add to the instances. You can add up to 20 tags.
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

