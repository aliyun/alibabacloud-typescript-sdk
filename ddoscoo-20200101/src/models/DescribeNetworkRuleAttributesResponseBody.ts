// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCcSblack extends $dara.Model {
  cnt?: number;
  during?: number;
  expires?: number;
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

export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCc extends $dara.Model {
  sblack?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCcSblack[];
  static names(): { [key: string]: string } {
    return {
      sblack: 'Sblack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sblack: { 'type': 'array', 'itemType': DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCcSblack },
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

export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigPayloadLen extends $dara.Model {
  max?: number;
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

export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSla extends $dara.Model {
  cps?: number;
  cpsEnable?: number;
  maxconn?: number;
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

export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSlimit extends $dara.Model {
  bps?: number;
  cps?: number;
  cpsEnable?: number;
  cpsMode?: number;
  maxconn?: number;
  maxconnEnable?: number;
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

export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfig extends $dara.Model {
  cc?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCc;
  nodataConn?: string;
  payloadLen?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigPayloadLen;
  persistenceTimeout?: number;
  sla?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSla;
  slimit?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSlimit;
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
      cc: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCc,
      nodataConn: 'string',
      payloadLen: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigPayloadLen,
      persistenceTimeout: 'number',
      sla: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSla,
      slimit: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSlimit,
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

export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributes extends $dara.Model {
  config?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfig;
  frontendPort?: number;
  instanceId?: string;
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
      config: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfig,
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

export class DescribeNetworkRuleAttributesResponseBody extends $dara.Model {
  networkRuleAttributes?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributes[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkRuleAttributes: 'NetworkRuleAttributes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkRuleAttributes: { 'type': 'array', 'itemType': DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkRuleAttributes)) {
      $dara.Model.validateArray(this.networkRuleAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

