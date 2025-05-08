// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListOriginPoolsResponseBodyOriginPoolsReferencesDnsRecords } from "./ListOriginPoolsResponseBodyOriginPoolsReferencesDnsRecords";
import { ListOriginPoolsResponseBodyOriginPoolsReferencesIPARecords } from "./ListOriginPoolsResponseBodyOriginPoolsReferencesIparecords";
import { ListOriginPoolsResponseBodyOriginPoolsReferencesLoadBalancers } from "./ListOriginPoolsResponseBodyOriginPoolsReferencesLoadBalancers";


export class ListOriginPoolsResponseBodyOriginPoolsReferences extends $dara.Model {
  /**
   * @remarks
   * 使用此源地址池为源站的七层记录列表。
   */
  dnsRecords?: ListOriginPoolsResponseBodyOriginPoolsReferencesDnsRecords[];
  /**
   * @remarks
   * List of layer 4 records that use this origin pool as the origin.
   */
  IPARecords?: ListOriginPoolsResponseBodyOriginPoolsReferencesIPARecords[];
  /**
   * @remarks
   * List of load balancers using this origin pool.
   */
  loadBalancers?: ListOriginPoolsResponseBodyOriginPoolsReferencesLoadBalancers[];
  static names(): { [key: string]: string } {
    return {
      dnsRecords: 'DnsRecords',
      IPARecords: 'IPARecords',
      loadBalancers: 'LoadBalancers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsRecords: { 'type': 'array', 'itemType': ListOriginPoolsResponseBodyOriginPoolsReferencesDnsRecords },
      IPARecords: { 'type': 'array', 'itemType': ListOriginPoolsResponseBodyOriginPoolsReferencesIPARecords },
      loadBalancers: { 'type': 'array', 'itemType': ListOriginPoolsResponseBodyOriginPoolsReferencesLoadBalancers },
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

