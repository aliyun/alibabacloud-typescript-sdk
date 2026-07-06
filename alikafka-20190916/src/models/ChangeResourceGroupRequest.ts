// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group to which you want to move the cloud resource instance.
   * 
   * > Resource groups are a mechanism for grouping and managing resources under an Alibaba Cloud account, which helps you solve the complexity of resource grouping and authorization management within a single cloud account. For more information, see [Resource Management](https://help.aliyun.com/document_detail/94475.html).
   * 
   * This parameter is required.
   * 
   * @example
   * rg-ac***********7q
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource to be tagged. Currently, only instance-level tagging is supported.
   * 
   * For example, if the instance ID is alikafka_post-cn-v0h1fgs2xxxx, the resource ID is alikafka_post-cn-v0h1fgs2xxxx.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      regionId: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

