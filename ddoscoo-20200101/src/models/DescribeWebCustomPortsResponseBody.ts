// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebCustomPortsResponseBodyWebCustomPorts extends $dara.Model {
  /**
   * @remarks
   * An array that consists of supported custom ports.
   */
  proxyPorts?: string[];
  /**
   * @remarks
   * The type of the protocol. Valid values:
   * 
   * *   **http**
   * *   **https**
   * 
   * @example
   * http
   */
  proxyType?: string;
  static names(): { [key: string]: string } {
    return {
      proxyPorts: 'ProxyPorts',
      proxyType: 'ProxyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeWebCustomPortsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc
   */
  requestId?: string;
  /**
   * @remarks
   * An array consisting of information about supported custom ports that are used by a website.
   */
  webCustomPorts?: DescribeWebCustomPortsResponseBodyWebCustomPorts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      webCustomPorts: 'WebCustomPorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      webCustomPorts: { 'type': 'array', 'itemType': DescribeWebCustomPortsResponseBodyWebCustomPorts },
    };
  }

  validate() {
    if(Array.isArray(this.webCustomPorts)) {
      $dara.Model.validateArray(this.webCustomPorts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

