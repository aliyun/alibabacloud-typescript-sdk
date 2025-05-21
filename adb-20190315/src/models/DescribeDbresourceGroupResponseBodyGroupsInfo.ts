// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBResourceGroupResponseBodyGroupsInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the resource group was created.
   * 
   * @example
   * 2022-10-09 16:57:35.241
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * USER_DEFAULT
   */
  groupName?: string;
  /**
   * @remarks
   * The query execution mode. Valid values:
   * 
   * *   **interactive**
   * *   **batch** (default)
   * 
   * > For more information, see [Query execution modes](https://help.aliyun.com/document_detail/189502.html).
   * 
   * @example
   * interactive
   */
  groupType?: string;
  /**
   * @remarks
   * The database accounts that are associated with the resource group.
   */
  groupUserList?: string[];
  /**
   * @remarks
   * The database accounts that are associated with the resource group. Multiple database accounts are separated by commas (,).
   * 
   * @example
   * testb,testc
   */
  groupUsers?: string;
  /**
   * @remarks
   * The number of nodes. Each node provides 16 cores and 64 GB memory.
   * 
   * @example
   * 2
   */
  nodeNum?: number;
  /**
   * @remarks
   * The time when the resource group was updated.
   * 
   * @example
   * 2022-11-09 16:57:35.241
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      groupName: 'GroupName',
      groupType: 'GroupType',
      groupUserList: 'GroupUserList',
      groupUsers: 'GroupUsers',
      nodeNum: 'NodeNum',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      groupName: 'string',
      groupType: 'string',
      groupUserList: { 'type': 'array', 'itemType': 'string' },
      groupUsers: 'string',
      nodeNum: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupUserList)) {
      $dara.Model.validateArray(this.groupUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

