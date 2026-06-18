// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDepartmentRequest extends $dara.Model {
  /**
   * @remarks
   * The department ID.  
   * 
   * You can call the [GetAllDepartment](https://help.aliyun.com/document_detail/2717975.html) API and check the **DepartmentId** field in the response to obtain the department ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12****
   */
  departmentId?: number;
  /**
   * @remarks
   * The AICCS instance ID.  
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
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'number',
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

