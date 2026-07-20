// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCompanyRequest extends $dara.Model {
  /**
   * @remarks
   * The company ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 51001
   */
  companyId?: number;
  static names(): { [key: string]: string } {
    return {
      companyId: 'CompanyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

