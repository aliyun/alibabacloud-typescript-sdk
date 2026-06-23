// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHostsForUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The address of the host. You can set this parameter to a domain name or an IP address. Exact match is supported.
   * 
   * @example
   * 192.168.XX.XX
   */
  hostAddress?: string;
  /**
   * @remarks
   * The name of the host. Exact match is supported.
   * 
   * @example
   * abc
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the bastion host instance that contains the user group.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to query for authorized or unauthorized hosts. Valid values:
   * 
   * - **Authorized** (default)
   * 
   * - **Unauthorized**
   * 
   * @example
   * Authorized
   */
  mode?: string;
  /**
   * @remarks
   * The operating system of the host. Valid values:
   * 
   * - **Linux**
   * 
   * - **Windows**
   * 
   * @example
   * Linux
   */
  OSType?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries to return on each page.<br>Maximum value: 100. Default value: 20.<br>
   * 
   * > We recommend that you specify this parameter.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the region where the bastion host instance is located.
   * 
   * > For more information about regions and their corresponding IDs, see [regions and availability zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user group whose hosts you want to list.
   * 
   * > You can call the [ListUserGroups](https://help.aliyun.com/document_detail/204509.html) operation to obtain the user group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAddress: 'HostAddress',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      mode: 'Mode',
      OSType: 'OSType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAddress: 'string',
      hostName: 'string',
      instanceId: 'string',
      mode: 'string',
      OSType: 'string',
      pageNumber: 'string',
      pageSize: 'string',
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

