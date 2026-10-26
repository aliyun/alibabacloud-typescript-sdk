// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachHostGroupAccountsToUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the host groups and the names of the host accounts to which you want to grant the user group access. You can specify up to 10 host group IDs and up to 10 host account names for each host group. If you do not specify host account names, the user group is granted access only to the host groups. For more information about the structure of this parameter, see the HostGroups parameter structure description in the Request parameters section.
   * > You can call the [ListHostGroups](https://help.aliyun.com/document_detail/201307.html) operation to query host group IDs and call the [ListHostAccounts](https://help.aliyun.com/document_detail/204372.html) operation to query host account names.
   * 
   * This parameter is required.
   * 
   * @example
   * [ {"HostGroupId":"1"}, {"HostGroupId":"2","HostAccountNames":["root","111","abc"]}, {"HostGroupId":"3","HostAccountNames":["root","111","abc"]}, {"HostGroupId":"4","HostAccountNames":["root","111","abc"]}]
   */
  hostGroups?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance where the user group resides. The user group is to be authorized to access host groups and host accounts.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies the region ID of the Bastionhost instance that manages the user group to which you want to grant permissions on host groups and host accounts.
   * > For the mappings between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user group to which you want to grant permissions on host groups and host accounts.
   * > You can call the [ListUserGroups](https://help.aliyun.com/document_detail/204509.html) operation to query the user group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroups: 'HostGroups',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroups: 'string',
      instanceId: 'string',
      regionId: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

