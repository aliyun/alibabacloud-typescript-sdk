// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDepartmentRequest extends $dara.Model {
  /**
   * @remarks
   * The department ID.
   * 
   * You can invoke the [GetAllDepartment](https://help.aliyun.com/document_detail/2717975.html) API and view the **DepartmentId** field in the response to obtain the department ID.
   * 
   * > This parameter does not support updates.
   * 
   * This parameter is required.
   * 
   * @example
   * 12****
   */
  departmentId?: number;
  /**
   * @remarks
   * The department name.
   * 
   * > This parameter supports updates.
   * 
   * This parameter is required.
   * 
   * @example
   * 部门A
   */
  departmentName?: string;
  /**
   * @remarks
   * The Artificial Intelligence Cloud Call Service (AICCS) instance ID.  
   * You can obtain it from **Instance Management** in the left-side navigation pane of the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      departmentName: 'DepartmentName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'number',
      departmentName: 'string',
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

