// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDcdnSLSRealtimeLogDeliveryResponseBodyContentDomains extends $dara.Model {
  /**
   * @remarks
   * The description of the returned result.
   * 
   * @example
   * created
   */
  desc?: string;
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
   * The name of the region.
   * 
   * @example
   * cn
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether the real-time log delivery project was successfully updated. Valid values:
   * 
   * *   **success**
   * *   **fail**
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

export class UpdateDcdnSLSRealtimeLogDeliveryResponseBodyContent extends $dara.Model {
  domains?: UpdateDcdnSLSRealtimeLogDeliveryResponseBodyContentDomains[];
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': UpdateDcdnSLSRealtimeLogDeliveryResponseBodyContentDomains },
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

export class UpdateDcdnSLSRealtimeLogDeliveryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration results of the domain name.
   */
  content?: UpdateDcdnSLSRealtimeLogDeliveryResponseBodyContent;
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
      content: UpdateDcdnSLSRealtimeLogDeliveryResponseBodyContent,
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

