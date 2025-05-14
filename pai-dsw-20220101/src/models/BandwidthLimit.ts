// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BandwidthLimit extends $dara.Model {
  egressRate?: string;
  egressWhitelists?: string[];
  ingressRate?: string;
  ingressWhitelists?: string[];
  static names(): { [key: string]: string } {
    return {
      egressRate: 'EgressRate',
      egressWhitelists: 'EgressWhitelists',
      ingressRate: 'IngressRate',
      ingressWhitelists: 'IngressWhitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressRate: 'string',
      egressWhitelists: { 'type': 'array', 'itemType': 'string' },
      ingressRate: 'string',
      ingressWhitelists: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.egressWhitelists)) {
      $dara.Model.validateArray(this.egressWhitelists);
    }
    if(Array.isArray(this.ingressWhitelists)) {
      $dara.Model.validateArray(this.ingressWhitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

