// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIdpDepartmentRequest extends $dara.Model {
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
   * idp-cfg68956d86e********
   */
  idpConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentName: 'DepartmentName',
      idpConfigId: 'IdpConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

