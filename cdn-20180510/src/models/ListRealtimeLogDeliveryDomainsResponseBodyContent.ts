// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRealtimeLogDeliveryDomainsResponseBodyContentDomains } from "./ListRealtimeLogDeliveryDomainsResponseBodyContentDomains";


export class ListRealtimeLogDeliveryDomainsResponseBodyContent extends $dara.Model {
  domains?: ListRealtimeLogDeliveryDomainsResponseBodyContentDomains[];
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': ListRealtimeLogDeliveryDomainsResponseBodyContentDomains },
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

