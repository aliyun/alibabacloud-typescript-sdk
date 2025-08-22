// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDcdnSLSRealTimeLogDeliveryResponseBodyContentDomains extends $dara.Model {
  /**
   * @remarks
   * The description of the returned result.
   * 
   * @example
   * ok
   */
  desc?: string;
  /**
   * @remarks
   * The domain name from which real-time logs were collected.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The region to which real-time logs were delivered.
   * 
   * @example
   * cn
   */
  region?: string;
  /**
   * @remarks
   * The status of real-time logs.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      domainName: 'DomainName',
      region: 'Region',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      domainName: 'string',
      region: 'string',
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

export class CreateDcdnSLSRealTimeLogDeliveryResponseBodyContent extends $dara.Model {
  domains?: CreateDcdnSLSRealTimeLogDeliveryResponseBodyContentDomains[];
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': CreateDcdnSLSRealTimeLogDeliveryResponseBodyContentDomains },
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

export class CreateDcdnSLSRealTimeLogDeliveryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration results of the domain name.
   */
  content?: CreateDcdnSLSRealTimeLogDeliveryResponseBodyContent;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F32C57AA-7BF8-49AE-A2CC-9F42390F5A19
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
      content: CreateDcdnSLSRealTimeLogDeliveryResponseBodyContent,
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

