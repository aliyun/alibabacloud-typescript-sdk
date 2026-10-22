// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachHostAccountsFromUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The host IDs and host account IDs that you want to remove from the user group.  
   * You can specify up to 10 host IDs, and each host supports up to 10 host account IDs. You do not need to specify host account IDs. If you do not specify host account IDs, the authorized host and all authorized host accounts of the host are removed from the user group. For the specific structure of this parameter, see the Hosts parameter structure description below the request parameters list.
   * > You can call the [ListHosts](https://help.aliyun.com/document_detail/200665.html) operation to query host IDs and call the [ListHostAccounts](https://help.aliyun.com/document_detail/204372.html) operation to query host account IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * [ {"HostId":"1"}, {"HostId":"2","HostAccountIds":["1","2","3",...]}, {"HostId":"3","HostAccountIds":["4","5","6"]}, {"HostId":"4","HostAccountIds":["9","8","7"]} ]
   */
  hosts?: string;
  /**
   * @remarks
   * The instance ID of the bastion host where the user group from which you want to remove authorization for hosts and host accounts resides.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the bastion host instance where the user group from which you want to remove authorized hosts and host accounts resides.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user group from which you want to remove authorized hosts and host accounts.
   * > You can call the [ListUserGroups](https://help.aliyun.com/document_detail/204509.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * １
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: 'string',
      instanceId: 'string',
      projectId: 'number',
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

