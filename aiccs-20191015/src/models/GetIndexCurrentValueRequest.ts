// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIndexCurrentValueRequest extends $dara.Model {
  /**
   * @remarks
   * List of department IDs. Separate multiple IDs with commas (,).
   * 
   * You can call the [GetAllDepartment](https://help.aliyun.com/document_detail/2717975.html) API and check the **DepartmentId** field in the response to obtain department IDs.
   * 
   * > When this parameter is not empty:  
   * > - If GroupIds is not empty, the system prioritizes querying data metrics for the skill groups specified by GroupIds.  
   * > - If GroupIds is empty, the system prioritizes querying data metrics for the departments specified by this parameter.
   * 
   * @example
   * 2332****,2334****
   */
  depIds?: string;
  /**
   * @remarks
   * List of skill group IDs. Separate multiple IDs with commas (,).
   * 
   * You can call the [QuerySkillGroups](https://help.aliyun.com/document_detail/2717970.html) API and check the **SkillGroupId** field in the response to obtain skill group IDs.
   * 
   * > When this parameter is not empty, the system prioritizes querying data metrics for the specified skill groups.
   * 
   * @example
   * 2323****,2324****
   */
  groupIds?: string;
  /**
   * @remarks
   * Artificial Intelligence Cloud Call Service (AICCS) instance ID.  
   * You can obtain it from **Instance Management** in the left-side navigation pane of the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
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

