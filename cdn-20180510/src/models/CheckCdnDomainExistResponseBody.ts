// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCdnDomainExistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 64D28B53-5902-409B-94F6-FD46680144FE
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * *   **DomainNotExist**: The domain name is not added.
   * *   **DomainExistOtherUser**: The domain name has been added by another account.
   * *   **DomainExistCdnProduct**: The domain name has been added to Alibaba Cloud CDN.
   * *   **DomainExistDcdnProduct**: The domain name has been added to Dynamic Content Delivery Network (DCDN).
   * *   **DomainExistScdnProduct**: The domain name has been added to Secure CDN (SCDN).
   * *   **DomainExistVodProduct**: The domain name has been added to ApsaraVideo VOD.
   * *   **DomainExistLiveProduct**: The domain name has been added to ApsaraVideo Live.
   * *   **DomainExistDcdnipaProduct**: The domain name has been added to DCDN IP Application Accelerator (IPA).
   * 
   * @example
   * DomainNotExist
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

