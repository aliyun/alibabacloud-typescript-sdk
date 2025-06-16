// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTrafficMirrorFilterRulesResponseBodyEgressRules } from "./CreateTrafficMirrorFilterRulesResponseBodyEgressRules";
import { CreateTrafficMirrorFilterRulesResponseBodyIngressRules } from "./CreateTrafficMirrorFilterRulesResponseBodyIngressRules";


export class CreateTrafficMirrorFilterRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of outbound rules.
   */
  egressRules?: CreateTrafficMirrorFilterRulesResponseBodyEgressRules[];
  /**
   * @remarks
   * The list of inbound rules.
   */
  ingressRules?: CreateTrafficMirrorFilterRulesResponseBodyIngressRules[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 07F272E2-6AD5-433A-8207-A607C76F1676
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      egressRules: 'EgressRules',
      ingressRules: 'IngressRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressRules: { 'type': 'array', 'itemType': CreateTrafficMirrorFilterRulesResponseBodyEgressRules },
      ingressRules: { 'type': 'array', 'itemType': CreateTrafficMirrorFilterRulesResponseBodyIngressRules },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.egressRules)) {
      $dara.Model.validateArray(this.egressRules);
    }
    if(Array.isArray(this.ingressRules)) {
      $dara.Model.validateArray(this.ingressRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

