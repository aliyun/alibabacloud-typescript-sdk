// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance.
   * Valid values of N: 1 to 20. 
   * 
   * > - This parameter cannot be an empty string and can be up to 128 characters in length.
   * > - This parameter cannot start with **aliyun** or **acs:** and cannot contain **http://** or **https://**.
   * 
   * @example
   * operation
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance.  
   * Valid values of N: 1 to 20.
   * > - This parameter can be an empty string and can be up to 128 characters in length.
   * > - This parameter cannot start with **aliyun** or **acs:** and cannot contain **http://** or **https://**.
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
   * The region ID of the Bastionhost instance for which you want to create and bind tags.
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
   * The list of Bastionhost instance IDs.
   * 
   * Valid values of N: 1 to 20.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the Bastionhost instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-78v1gc****
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * The only valid value is **INSTANCE**, which indicates a Bastionhost instance.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags.
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

