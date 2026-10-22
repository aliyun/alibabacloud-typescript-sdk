// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHostGroupsForUserRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the host group to query. The name can be up to 128 characters in length. Only exact match is supported.
   * 
   * @example
   * group
   */
  hostGroupName?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost instance to which the user belongs.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the parameter value.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The mode of the host group list to query. Valid values:
   * - **Authorized**: Authorized host groups. This is the default value.
   * - **Unauthorized**: Unauthorized host groups.
   * 
   * @example
   * Authorized
   */
  mode?: string;
  /**
   * @remarks
   * The page number for paging. Default value: **1**.
   * 
   * @example
   * １
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page for paging.  
   * The maximum value of the PageSize parameter is 100. Default value: 20. If you leave this parameter empty, 20 entries are returned by default.
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
   * > You can call the [ListUsers](https://help.aliyun.com/document_detail/204522.html) operation to obtain the parameter value.
   * 
   * This parameter is required.
   * 
   * @example
   * １
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroupName: 'HostGroupName',
      instanceId: 'InstanceId',
      mode: 'Mode',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroupName: 'string',
      instanceId: 'string',
      mode: 'string',
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

