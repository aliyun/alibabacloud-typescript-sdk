// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDepartmentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  departmentName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentName: 'DepartmentName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

