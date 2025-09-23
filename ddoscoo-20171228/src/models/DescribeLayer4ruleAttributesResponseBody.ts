// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLayer4RuleAttributesResponseBodyListenersConfigCcSblack extends $dara.Model {
  /**
   * @example
   * 5
   */
  cnt?: number;
  /**
   * @example
   * 60
   */
  during?: number;
  /**
   * @example
   * 1800
   */
  expires?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      cnt: 'Cnt',
      during: 'During',
      expires: 'Expires',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnt: 'number',
      during: 'number',
      expires: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseBodyListenersConfigCc extends $dara.Model {
  sblack?: DescribeLayer4RuleAttributesResponseBodyListenersConfigCcSblack[];
  static names(): { [key: string]: string } {
    return {
      sblack: 'Sblack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sblack: { 'type': 'array', 'itemType': DescribeLayer4RuleAttributesResponseBodyListenersConfigCcSblack },
    };
  }

  validate() {
    if(Array.isArray(this.sblack)) {
      $dara.Model.validateArray(this.sblack);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseBodyListenersConfigPayloadLen extends $dara.Model {
  /**
   * @example
   * 2
   */
  max?: number;
  /**
   * @example
   * 1
   */
  min?: number;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseBodyListenersConfigSla extends $dara.Model {
  /**
   * @example
   * 100
   */
  cps?: number;
  /**
   * @example
   * 0
   */
  cpsEnable?: number;
  /**
   * @example
   * 1000
   */
  maxconn?: number;
  /**
   * @example
   * 0
   */
  maxconnEnable?: number;
  static names(): { [key: string]: string } {
    return {
      cps: 'Cps',
      cpsEnable: 'CpsEnable',
      maxconn: 'Maxconn',
      maxconnEnable: 'MaxconnEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cps: 'number',
      cpsEnable: 'number',
      maxconn: 'number',
      maxconnEnable: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseBodyListenersConfigSlimit extends $dara.Model {
  /**
   * @example
   * 0
   */
  bps?: number;
  /**
   * @example
   * 100
   */
  cps?: number;
  /**
   * @example
   * 0
   */
  cpsEnable?: number;
  /**
   * @example
   * 2
   */
  cpsMode?: number;
  /**
   * @example
   * 1000
   */
  maxconn?: number;
  /**
   * @example
   * 0
   */
  maxconnEnable?: number;
  /**
   * @example
   * 0
   */
  pps?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      cps: 'Cps',
      cpsEnable: 'CpsEnable',
      cpsMode: 'CpsMode',
      maxconn: 'Maxconn',
      maxconnEnable: 'MaxconnEnable',
      pps: 'Pps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      cps: 'number',
      cpsEnable: 'number',
      cpsMode: 'number',
      maxconn: 'number',
      maxconnEnable: 'number',
      pps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseBodyListenersConfig extends $dara.Model {
  cc?: DescribeLayer4RuleAttributesResponseBodyListenersConfigCc;
  /**
   * @example
   * on
   */
  nodataConn?: string;
  payloadLen?: DescribeLayer4RuleAttributesResponseBodyListenersConfigPayloadLen;
  /**
   * @example
   * 0
   */
  persistenceTimeout?: number;
  sla?: DescribeLayer4RuleAttributesResponseBodyListenersConfigSla;
  slimit?: DescribeLayer4RuleAttributesResponseBodyListenersConfigSlimit;
  /**
   * @example
   * on
   */
  synproxy?: string;
  static names(): { [key: string]: string } {
    return {
      cc: 'Cc',
      nodataConn: 'NodataConn',
      payloadLen: 'PayloadLen',
      persistenceTimeout: 'PersistenceTimeout',
      sla: 'Sla',
      slimit: 'Slimit',
      synproxy: 'Synproxy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cc: DescribeLayer4RuleAttributesResponseBodyListenersConfigCc,
      nodataConn: 'string',
      payloadLen: DescribeLayer4RuleAttributesResponseBodyListenersConfigPayloadLen,
      persistenceTimeout: 'number',
      sla: DescribeLayer4RuleAttributesResponseBodyListenersConfigSla,
      slimit: DescribeLayer4RuleAttributesResponseBodyListenersConfigSlimit,
      synproxy: 'string',
    };
  }

  validate() {
    if(this.cc && typeof (this.cc as any).validate === 'function') {
      (this.cc as any).validate();
    }
    if(this.payloadLen && typeof (this.payloadLen as any).validate === 'function') {
      (this.payloadLen as any).validate();
    }
    if(this.sla && typeof (this.sla as any).validate === 'function') {
      (this.sla as any).validate();
    }
    if(this.slimit && typeof (this.slimit as any).validate === 'function') {
      (this.slimit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseBodyListeners extends $dara.Model {
  config?: DescribeLayer4RuleAttributesResponseBodyListenersConfig;
  /**
   * @example
   * 233
   */
  frontendPort?: number;
  /**
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceId?: string;
  /**
   * @example
   * tcp
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: DescribeLayer4RuleAttributesResponseBodyListenersConfig,
      frontendPort: 'number',
      instanceId: 'string',
      protocol: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseBody extends $dara.Model {
  listeners?: DescribeLayer4RuleAttributesResponseBodyListeners[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: { 'type': 'array', 'itemType': DescribeLayer4RuleAttributesResponseBodyListeners },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.listeners)) {
      $dara.Model.validateArray(this.listeners);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

