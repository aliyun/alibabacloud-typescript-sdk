// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHoneypotProbeBindRequestBindPortList extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to bind the port. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  bindPort?: boolean;
  /**
   * @remarks
   * The end port on which the probe monitors.
   * 
   * @example
   * 80
   */
  endPort?: number;
  /**
   * @remarks
   * Specifies whether the port is a fixed port. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  fixed?: boolean;
  /**
   * @remarks
   * The type of the protocol. Valid values:
   * 
   * *   **tcp**
   * *   **udp**
   * 
   * @example
   * tcp
   */
  proto?: string;
  /**
   * @remarks
   * The start port on which the probe monitors.
   * 
   * @example
   * 80
   */
  startPort?: number;
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 8080
   */
  targetPort?: number;
  static names(): { [key: string]: string } {
    return {
      bindPort: 'BindPort',
      endPort: 'EndPort',
      fixed: 'Fixed',
      proto: 'Proto',
      startPort: 'StartPort',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindPort: 'boolean',
      endPort: 'number',
      fixed: 'boolean',
      proto: 'string',
      startPort: 'number',
      targetPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHoneypotProbeBindRequest extends $dara.Model {
  /**
   * @remarks
   * The ports that are bound to the probe.
   */
  bindPortList?: CreateHoneypotProbeBindRequestBindPortList[];
  /**
   * @remarks
   * The honeypot ID.
   * 
   * >  You can call the [ListHoneypot](~~ListHoneypot~~) operation to query the IDs of honeypots.
   * 
   * @example
   * dba7d44775be8e0e5888ee3b1a62554a93d2512247cabc38ddeac17a3b3f****
   */
  honeypotId?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The probe ID.
   * 
   * >  You can call the [ListHoneypotProbe](~~ListHoneypotProbe~~) operation to query the IDs of probes.
   * 
   * @example
   * 36bad711-d1ac-4419-ac68-c1aa280f****
   */
  probeId?: string;
  /**
   * @remarks
   * The IP addresses that are monitored.
   */
  serviceIpList?: string[];
  static names(): { [key: string]: string } {
    return {
      bindPortList: 'BindPortList',
      honeypotId: 'HoneypotId',
      lang: 'Lang',
      probeId: 'ProbeId',
      serviceIpList: 'ServiceIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindPortList: { 'type': 'array', 'itemType': CreateHoneypotProbeBindRequestBindPortList },
      honeypotId: 'string',
      lang: 'string',
      probeId: 'string',
      serviceIpList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.bindPortList)) {
      $dara.Model.validateArray(this.bindPortList);
    }
    if(Array.isArray(this.serviceIpList)) {
      $dara.Model.validateArray(this.serviceIpList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

