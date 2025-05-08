// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetOriginPoolResponseBodyReferencesDnsRecords } from "./GetOriginPoolResponseBodyReferencesDnsRecords";
import { GetOriginPoolResponseBodyReferencesIPARecords } from "./GetOriginPoolResponseBodyReferencesIparecords";
import { GetOriginPoolResponseBodyReferencesLoadBalancers } from "./GetOriginPoolResponseBodyReferencesLoadBalancers";


export class GetOriginPoolResponseBodyReferences extends $dara.Model {
  /**
   * @remarks
   * List of layer 7 records using this origin pool as the origin.
   */
  dnsRecords?: GetOriginPoolResponseBodyReferencesDnsRecords[];
  /**
   * @remarks
   * List of layer 4 records using this origin pool as the origin.
   */
  IPARecords?: GetOriginPoolResponseBodyReferencesIPARecords[];
  /**
   * @remarks
   * List of load balancers using this origin pool.
   */
  loadBalancers?: GetOriginPoolResponseBodyReferencesLoadBalancers[];
  static names(): { [key: string]: string } {
    return {
      dnsRecords: 'DnsRecords',
      IPARecords: 'IPARecords',
      loadBalancers: 'LoadBalancers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsRecords: { 'type': 'array', 'itemType': GetOriginPoolResponseBodyReferencesDnsRecords },
      IPARecords: { 'type': 'array', 'itemType': GetOriginPoolResponseBodyReferencesIPARecords },
      loadBalancers: { 'type': 'array', 'itemType': GetOriginPoolResponseBodyReferencesLoadBalancers },
    };
  }

  validate() {
    if(Array.isArray(this.dnsRecords)) {
      $dara.Model.validateArray(this.dnsRecords);
    }
    if(Array.isArray(this.IPARecords)) {
      $dara.Model.validateArray(this.IPARecords);
    }
    if(Array.isArray(this.loadBalancers)) {
      $dara.Model.validateArray(this.loadBalancers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

