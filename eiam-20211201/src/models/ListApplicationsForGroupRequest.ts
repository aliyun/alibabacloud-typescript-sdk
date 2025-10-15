// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsForGroupRequest extends $dara.Model {
  /**
   * @remarks
   * 非必填，如果填写则可以基于应用ID进行过滤，列表中最多包含100个元素。
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationIds?: string[];
  /**
   * @remarks
   * 组的唯一标识。
   * 
   * This parameter is required.
   * 
   * @example
   * group_miu8e4t4d7i4u7uwezgr54xxxx
   */
  groupId?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 当前查询的列表页码，默认为1。
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 当前查询的列表页码，默认为20。
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      groupId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

