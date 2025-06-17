// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCdnDomainICPResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the resource plan. Valid value:
   * 
   * *   **DomainIsRegistration**: An ICP filing is obtained for the domain name.
   * *   **DomainNotRegistration**: No ICP filing is obtained for the domain name.
   * 
   * @example
   * DomainIsRegistration
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

