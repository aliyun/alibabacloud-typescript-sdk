// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCompanyResponseBody extends $dara.Model {
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
   * C2BAAB19-BCEB-569B-BE08-7C728344A79C
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

