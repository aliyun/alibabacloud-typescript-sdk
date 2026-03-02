// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompanyRoleCreateCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  companyId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 多端商城
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

