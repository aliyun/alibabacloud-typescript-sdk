// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachHostAccountsFromUserRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the hosts and host accounts on which you want to revoke permissions from the user. You can specify up to 10 host IDs and up to 10 host account IDs for each host. You can specify only host IDs. In this case, the permissions on the specified hosts and all accounts of the hosts are revoked from the user. For more information about this parameter, see the Description of the Hosts parameter section of this topic.
   * 
   * >  You can call the [ListHosts](https://help.aliyun.com/document_detail/200665.html) operation to query the host IDs and the [ListHostAccountsForUser](https://help.aliyun.com/document_detail/466581.html) operation to query the host account IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * [ {"HostId":"1"}, {"HostId":"2","HostAccountIds":["1","2","3"]}, {"HostId":"3","HostAccountIds":["4","5","6"]}, {"HostId":"4","HostAccountIds":["9","8","7"]} ]
   */
  hosts?: string;
  /**
   * @remarks
   * The ID of the bastion host on which you want to revoke permissions on the specified hosts and host accounts from the user.
   * 
   * >  You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the bastion host on which you want to revoke permissions on the specified hosts and host accounts from the user.
   * 
   * >  For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user from whom you want to revoke permissions on the specified hosts and host accounts.
   * 
   * >  You can call the [ListUsers](https://help.aliyun.com/document_detail/204522.html) operation to query the user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: 'string',
      instanceId: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

