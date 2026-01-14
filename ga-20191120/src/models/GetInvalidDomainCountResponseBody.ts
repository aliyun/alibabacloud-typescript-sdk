// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInvalidDomainCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of invalid domain names.
   * 
   * @example
   * 1
   */
  invalidDomainCount?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invalidDomainCount: 'InvalidDomainCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidDomainCount: 'string',
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

