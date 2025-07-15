// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveRealtimeLogDeliveryDomainsResponseBodyContentDomains extends $dara.Model {
  /**
   * @remarks
   * The streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The status of real-time log delivery. Valid values:
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

export class ListLiveRealtimeLogDeliveryDomainsResponseBodyContent extends $dara.Model {
  domains?: ListLiveRealtimeLogDeliveryDomainsResponseBodyContentDomains[];
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': ListLiveRealtimeLogDeliveryDomainsResponseBodyContentDomains },
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRealtimeLogDeliveryDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain names.
   */
  content?: ListLiveRealtimeLogDeliveryDomainsResponseBodyContent;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 95D5B69F-8AEC-419B-8F3A-612B35032B0D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: ListLiveRealtimeLogDeliveryDomainsResponseBodyContent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

