// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group to which you want to move the resource.
   * > You can use resource groups to facilitate resource grouping and permission management for an Alibaba Cloud. For more information, see [What is resource management?](https://help.aliyun.com/document_detail/158855.html)
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aeky6b2jfeerxxx
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aeip-2zeerraiwb7ujsxdc****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource for which you want to modify the resource group. Valid value: **ANYCASTEIPADDRESS**.
   * 
   * This parameter is required.
   * 
   * @example
   * ANYCASTEIPADDRESS
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

