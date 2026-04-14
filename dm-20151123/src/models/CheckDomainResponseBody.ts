// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * Domain status. Indicates whether the verification was successful, with values as follows:
   * 
   * - **0**: Available, verified successfully
   * - **1**: Unavailable, verification failed
   * 
   * @example
   * 1
   */
  domainStatus?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * F0B82E83-A1D9-4FE6-97D2-F4B231F80B02
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainStatus: 'DomainStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainStatus: 'number',
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

