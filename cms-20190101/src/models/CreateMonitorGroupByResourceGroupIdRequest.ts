// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMonitorGroupByResourceGroupIdRequest extends $dara.Model {
  /**
   * @remarks
   * The alert contact groups. The alert notifications of the application group are sent to the alert contacts that belong to the specified alert contact groups.
   * 
   * An alert contact group can contain one or more alert contacts. For information about how to create alert contacts and alert contact groups, see [PutContact](https://help.aliyun.com/document_detail/114923.html) and [PutContactGroup](https://help.aliyun.com/document_detail/114929.html). For information about how to obtain alert contact groups, see [DescribeContactGroupList](https://help.aliyun.com/document_detail/114922.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_Group
   */
  contactGroupList?: string[];
  /**
   * @remarks
   * Specifies whether the CloudMonitor agent is automatically installed for the application group. CloudMonitor determines whether to automatically install the CloudMonitor agent for the hosts in an application group based on the value of this parameter. Valid values:
   * 
   * *   true: The CloudMonitor agent is automatically installed.
   * *   false (default): The CloudMonitor agent is not automatically installed.
   * 
   * @example
   * true
   */
  enableInstallAgent?: boolean;
  /**
   * @remarks
   * Specifies whether the application group automatically subscribes to event notifications. If events whose severity level is critical or warning occur on resources in an application group, CloudMonitor sends alert notifications. Valid values:
   * 
   * *   true: The application group automatically subscribes to event notifications.
   * *   false (default): The application group does not automatically subscribe to event notifications.
   * 
   * @example
   * true
   */
  enableSubscribeEvent?: boolean;
  /**
   * @remarks
   * The ID of the region where the resource group resides.
   * 
   * For information about how to obtain the ID of the region where a resource group resides, see [GetResourceGroup](https://help.aliyun.com/document_detail/158866.html).
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
   * For information about how to obtain the ID of a resource group, see [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html).
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
   * For information about how to obtain the name of a resource group, see [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html).
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

