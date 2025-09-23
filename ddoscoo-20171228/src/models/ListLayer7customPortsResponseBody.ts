// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLayer7CustomPortsResponseBodyLayer7CustomPorts extends $dara.Model {
  flag?: string;
  proxyPorts?: string[];
  /**
   * @example
   * https
   */
  proxyType?: string;
  static names(): { [key: string]: string } {
    return {
      flag: 'Flag',
      proxyPorts: 'ProxyPorts',
      proxyType: 'ProxyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flag: 'string',
      proxyPorts: { 'type': 'array', 'itemType': 'string' },
      proxyType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.proxyPorts)) {
      $dara.Model.validateArray(this.proxyPorts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayer7CustomPortsResponseBody extends $dara.Model {
  layer7CustomPorts?: ListLayer7CustomPortsResponseBodyLayer7CustomPorts[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      layer7CustomPorts: 'Layer7CustomPorts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layer7CustomPorts: { 'type': 'array', 'itemType': ListLayer7CustomPortsResponseBodyLayer7CustomPorts },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.layer7CustomPorts)) {
      $dara.Model.validateArray(this.layer7CustomPorts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

