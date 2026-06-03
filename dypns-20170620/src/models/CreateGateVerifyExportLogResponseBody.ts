// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGateVerifyExportLogResponseBody extends $dara.Model {
  /**
   * @example
   * C19D3BCD-2233-59DF-B459-6E6587C24405
   */
  requestId?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

