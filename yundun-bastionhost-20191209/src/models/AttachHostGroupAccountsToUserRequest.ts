// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachHostGroupAccountsToUserRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the host groups and the names of the host accounts to which you want to grant the user access. You can specify up to 10 host group IDs and up to 10 host account names for each host group. If you do not specify host account names, the user is granted access only to the host groups. For more information about the structure of this parameter, see the HostGroups parameter structure description in the request parameter list.
   * > You can call the [ListHostGroups](https://help.aliyun.com/document_detail/201307.html) operation to obtain host group IDs and call the [ListHostAccounts](https://help.aliyun.com/document_detail/204372.html) operation to obtain host account names.
   * 
   * This parameter is required.
   * 
   * @example
   * [ {"HostGroupId":"1"}, {"HostGroupId":"2","HostAccountNames":["root","111","abc"]}, {"HostGroupId":"3","HostAccountNames":["root","111","abc"]}, {"HostGroupId":"4","HostAccountNames":["root","111","abc"]} ]
   */
  hostGroups?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost instance to which the user to be granted authorization on host groups and host accounts belongs.
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
   * Specifies the region ID of the Bastionhost instance where the user to be granted permissions on host groups and host accounts is located.
   * > For the mappings between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user to be granted permissions on host groups and host accounts.
   * > You can call the [ListUsers](https://help.aliyun.com/document_detail/204522.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroups: 'HostGroups',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroups: 'string',
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

