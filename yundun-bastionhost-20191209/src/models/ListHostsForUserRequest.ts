// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHostsForUserRequest extends $dara.Model {
  /**
   * @remarks
   * The address of the host to query. You can use a domain name or an IP address. Only exact match is supported.
   * 
   * @example
   * 192.168.XX.XX
   */
  hostAddress?: string;
  /**
   * @remarks
   * The name of the host to query. Only exact match is supported.
   * 
   * @example
   * abc
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance to which the user belongs.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The mode of the host list to query. Valid values:
   * - **Authorized**: Authorized hosts. This is the default value.
   * - **Unauthorized**: Unauthorized hosts.
   * 
   * @example
   * Authorized
   */
  mode?: string;
  /**
   * @remarks
   * The operating system type of the host to query. Valid values:
   * - **Linux**
   * - **Windows**
   * 
   * @example
   * Linux
   */
  OSType?: string;
  /**
   * @remarks
   * The page number of the current page in a paging query. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page for a paging query.  
   * The maximum value of the PageSize parameter is 100. Default value: 20. If this parameter is left empty, 20 entries are returned by default.
   * > Specify a value for the PageSize parameter.
   * 
   * @example
   * 20
   */
  pageSize?: string;
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
   * The region ID of the Bastionhost instance to which the user belongs.
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user to query.
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
      hostAddress: 'HostAddress',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      mode: 'Mode',
      OSType: 'OSType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      userId: 'UserId',
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
      projectId: 'number',
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

