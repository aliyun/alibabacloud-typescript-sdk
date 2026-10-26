// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachHostAccountsToUserRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the hosts and host accounts to be authorized for the user. You can specify up to 10 host IDs, and up to 9 host account IDs for each host. If you do not specify host account IDs, only the hosts are authorized for the user. For more information about the structure of this parameter, see the Hosts parameter structure description in the request parameters section.
   * > You can call the [ListHosts](https://help.aliyun.com/document_detail/200665.html) operation to query host IDs and call the [ListHostAccounts](https://help.aliyun.com/document_detail/204372.html) operation to query host account IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * [ {"HostId":"1"}, {"HostId":"2","HostAccountIds":["1","2","3"]}, {"HostId":"3","HostAccountIds":["4","5","6"]}, {"HostId":"4","HostAccountIds":["9","8","7"]}  ]
   */
  hosts?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost instance to which the user to be granted authorization for hosts and host accounts belongs.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance where the user to be authorized for hosts and host accounts resides.
   * > For the mappings between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user to whom you want to authorize hosts and host accounts.
   * > You can call the [ListUsers](https://help.aliyun.com/document_detail/204522.html) operation to query the value of this parameter.
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

