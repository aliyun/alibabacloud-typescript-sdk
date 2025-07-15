// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrafficMirrorFilterRulesResponseBodyEgressRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the outbound rule.
   * 
   * @example
   * tmr-j6cok23ugp53eeib5****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficMirrorFilterRulesResponseBodyIngressRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the inbound rule.
   * 
   * @example
   * tmr-j6c6rtallo51ouzv3****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

