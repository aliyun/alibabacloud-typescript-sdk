// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIndexCurrentValueRequest extends $dara.Model {
  /**
   * @remarks
   * The list of department IDs. Separate multiple IDs with commas (,).
   * 
   * Call the [GetAllDepartment](https://help.aliyun.com/document_detail/2717975.html) operation and check the **DepartmentId** parameter in the response to obtain the department ID.
   * 
   * > When this parameter is not empty:
   * > - If GroupIds is not empty, the query is performed based on the skill group list corresponding to GroupIds.
   * > - If GroupIds is empty, the query is performed based on the department list corresponding to this parameter.
   * 
   * @example
   * 2332****,2334****
   */
  depIds?: string;
  /**
   * @remarks
   * The list of skill group IDs. Separate multiple IDs with commas (,).
   * 
   * Call the [QuerySkillGroups](https://help.aliyun.com/document_detail/2717970.html) operation and check the **SkillGroupId** parameter in the response to obtain the skill group ID.
   * 
   * > When this parameter is not empty, the query is performed based on the skill group list corresponding to this parameter.
   * 
   * @example
   * 2323****,2324****
   */
  groupIds?: string;
  /**
   * @remarks
   * The AICCS instance ID. You can obtain the instance ID from <b>Instance Management</b> in the left-side navigation pane of the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * > The AICCS instance ID is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      depIds: 'DepIds',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depIds: 'string',
      groupIds: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

