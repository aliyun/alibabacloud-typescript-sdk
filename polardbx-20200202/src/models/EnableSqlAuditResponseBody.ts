// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableSqlAuditResponseBody extends $dara.Model {
  /**
   * @example
   * DC3ABA3E-0F8A-4596-9104-F5167C******
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

