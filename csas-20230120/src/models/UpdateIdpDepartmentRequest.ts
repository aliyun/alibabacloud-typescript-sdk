// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIdpDepartmentRequest extends $dara.Model {
  /**
   * @remarks
   * The department ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10653
   */
  departmentId?: string;
  /**
   * @remarks
   * The department name.
   * 
   * This parameter is required.
   * 
   * @example
   * 示例部门
   */
  departmentName?: string;
  /**
   * @remarks
   * The ID of the custom identity source configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * 598
   */
  idpConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      departmentName: 'DepartmentName',
      idpConfigId: 'IdpConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'string',
      departmentName: 'string',
      idpConfigId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

