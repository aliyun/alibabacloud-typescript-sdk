// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnMigrateRegisterStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * 64D28B53-5902-409B-94F6-FD46680144FE
   */
  requestId?: string;
  /**
   * @remarks
   * The registration status. Valid values:
   * 
   * *   **not exist**
   * *   **running**
   * *   **succeed**
   * *   **failed**
   * 
   * @example
   * succeed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
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

