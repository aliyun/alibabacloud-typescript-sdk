// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableSqlAuditResponseBody extends $dara.Model {
  /**
   * @example
   * DC3DAE3E-0F8A-4596-9104-F5167C******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

