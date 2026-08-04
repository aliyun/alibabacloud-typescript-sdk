// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * quotad2kd8ljpsno
   */
  quotaId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF05F13-B24C-5129-9048-4FA684DCD579
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
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

