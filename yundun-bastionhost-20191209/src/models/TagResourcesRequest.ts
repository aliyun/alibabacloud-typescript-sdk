// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the bastion host. You can specify up to 20 tags for the bastion host.
   * 
   * > - Thekey cannot be an empty string. The key can be up to 128 characters in length. 
   * > - It cannot start with **aliyun** or **acs:**, and cannot contain **http://** or **https://**.
   * 
   * @example
   * operation
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the bastion host.\\
   * You can specify up to 20 tags for the bastion host.
   * 
   * > *   The value can be a string of up to 128 characters or an empty string.
   * > *   It cannot start with **aliyun** or **acs:**, and cannot contain **http://** or **https://**.
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
   * The region ID of the bastion hosts to which you want to create and add tags.
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
   * An array that consists of IDs of bastion hosts.
   * 
   * Valid values: 1 to 20.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query IDs of bastion hosts.
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
   * Set the value to **INSTANCE**, which indicates that the resource is a bastion host.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
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

