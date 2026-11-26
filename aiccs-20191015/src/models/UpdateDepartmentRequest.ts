// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDepartmentRequest extends $dara.Model {
  /**
   * @remarks
   * The department ID. You can call the [GetAllDepartment](https://help.aliyun.com/document_detail/2717975.html) operation and view the **DepartmentId** response parameter to obtain the department ID.
   * 
   * > This parameter cannot be updated.
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
   * > This parameter can be updated.
   * 
   * This parameter is required.
   * 
   * @example
   * Department A
   */
  departmentName?: string;
  /**
   * @remarks
   * The AICCS instance ID. You can obtain the ID from the <b>Instance Management</b> page in the left-side navigation pane of the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
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

