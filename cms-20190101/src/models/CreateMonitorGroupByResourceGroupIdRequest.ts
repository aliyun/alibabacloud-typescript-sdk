// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMonitorGroupByResourceGroupIdRequest extends $dara.Model {
  /**
   * @remarks
   * The alert contact group. Alert notifications for the application group are sent to the alert contacts in this alert contact group.
   * 
   * An alert contact group is a collection of alert contacts and can contain one or more alert contacts. For more information about how to create alert contacts and alert contact groups, see [PutContact](https://help.aliyun.com/document_detail/114923.html) and [PutContactGroup](https://help.aliyun.com/document_detail/114929.html). For more information about how to obtain alert contact groups, see [DescribeContactGroupList](https://help.aliyun.com/document_detail/114922.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_Group
   */
  contactGroupList?: string[];
  /**
   * @remarks
   * Specifies whether to enable automatic installation of the CloudMonitor agent for the application group. CloudMonitor automatically installs the CloudMonitor agent on hosts in the application group. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled. Default value.
   * 
   * @example
   * true
   */
  enableInstallAgent?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic subscription to event notifications for the application group. When critical or warning events occur on resources in the application group, CloudMonitor sends alert notifications. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled. Default value.
   * 
   * @example
   * true
   */
  enableSubscribeEvent?: boolean;
  /**
   * @remarks
   * The region ID of the resource group.
   * 
   * For more information about how to obtain the region ID of a resource group, see [GetResourceGroup](https://help.aliyun.com/document_detail/158866.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * For more information about how to obtain the resource group ID, see [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html).
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfmw3ty5y7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * For more information about how to obtain the resource group name, see [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html).
   * 
   * This parameter is required.
   * 
   * @example
   * CloudMonitor
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupList: 'ContactGroupList',
      enableInstallAgent: 'EnableInstallAgent',
      enableSubscribeEvent: 'EnableSubscribeEvent',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupList: { 'type': 'array', 'itemType': 'string' },
      enableInstallAgent: 'boolean',
      enableSubscribeEvent: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceGroupName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contactGroupList)) {
      $dara.Model.validateArray(this.contactGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

