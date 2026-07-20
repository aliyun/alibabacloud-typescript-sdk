// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCompanyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The company ID.
   * 
   * @example
   * 51001
   */
  companyId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 838603C0-72A1-5070-A2E6-16E43861DB71
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      companyId: 'CompanyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

