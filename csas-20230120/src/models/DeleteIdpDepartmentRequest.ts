// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIdpDepartmentRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the department.
   * 
   * This parameter is required.
   * 
   * @example
   * 10829
   */
  departmentId?: string;
  /**
   * @remarks
   * ID of the custom identity provider configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * idp-cfg68956d86e********
   */
  idpConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      idpConfigId: 'IdpConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'string',
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

