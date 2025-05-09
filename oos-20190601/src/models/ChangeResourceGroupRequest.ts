// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group to which the cloud resource is to be moved. You can use resource groups to manage resources owned by your Alibaba Cloud account. Resource groups simplify the resource and permission management of your Alibaba Cloud account. For more information, see [What is Resource Management?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfm3peow3k****
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the cloud resource that you want to move to another resource group.
   * 
   * *   If the ResourceType parameter is set to template, set the ResourceId parameter to the name of the template.
   * *   If the ResourceType parameter is set to parameter, set the ResourceId parameter to the name of the parameter.
   * *   If the ResourceType parameter is set to secretparameter, set the ResourceId parameter to the name of the encryption parameter.
   * *   If the ResourceType parameter is set to stateconfiguration, set the ResourceId parameter to the ID of the desired-state configuration.
   * *   If the ResourceType parameter is set to application, set the ResourceId parameter to the name of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * TemplateName
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the cloud resource. Valid values:
   * 
   * *   template: template
   * *   parameter: parameter
   * *   secretparameter: encryption parameter
   * *   stateconfiguration: desired-state configuration
   * *   application: application
   * 
   * This parameter is required.
   * 
   * @example
   * template
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      regionId: 'string',
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

