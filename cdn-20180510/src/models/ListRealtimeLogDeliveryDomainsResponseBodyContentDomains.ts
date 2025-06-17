// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRealtimeLogDeliveryDomainsResponseBodyContentDomains extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * *   **online**: enabled
   * *   **offline**: disabled
   * 
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
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

