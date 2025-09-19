// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHoneypotProbeBindRequestBindPortList extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to bind a port. Valid values:
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
   * 81
   */
  endPort?: number;
  /**
   * @remarks
   * Specifies whether the port is fixed. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 0
   */
  fixed?: boolean;
  /**
   * @remarks
   * The UUID of the port.
   * 
   * @example
   * 3183
   */
  id?: number;
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
   * 81
   */
  startPort?: number;
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 80
   */
  targetPort?: number;
  static names(): { [key: string]: string } {
    return {
      bindPort: 'BindPort',
      endPort: 'EndPort',
      fixed: 'Fixed',
      id: 'Id',
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
      id: 'number',
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

export class UpdateHoneypotProbeBindRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the honeypot to which the probe is bound.
   * 
   * @example
   * f52e8624-e43c-473c-8312-e0fed384****
   */
  bindId?: string;
  /**
   * @remarks
   * The ports that are bound to the probe.
   */
  bindPortList?: UpdateHoneypotProbeBindRequestBindPortList[];
  /**
   * @remarks
   * The operation that the probe performs. Valid values:
   * 
   * *   **forward_honey**: forward traffic to a honeypot
   * *   **scan_port**: monitor and scan
   * 
   * @example
   * forward_honey
   */
  bindType?: string;
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The honeypot ID.
   * 
   * >  You can call the [ListHoneypot](~~ListHoneypot~~) operation to obtain the IDs of honeypots.
   * 
   * @example
   * dba7d44775be8e0e5888ee3b1a62554a93d2512247cabc38ddeac17a3b3f****
   */
  honeypotId?: string;
  /**
   * @remarks
   * The port ID of the probe service.
   * 
   * @example
   * 1906
   */
  id?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
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
   * The number of entries per page. Default value: 20. If you leave this parameter empty, 20 entries are returned per page.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ports that are monitored.
   * 
   * @example
   * {\\"tcp\\":\\"1-65535\\",\\"udp\\":\\"1-65535\\"}
   */
  ports?: string;
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
  /**
   * @remarks
   * The status of the port.
   * 
   * @example
   * 0
   */
  setStatus?: number;
  static names(): { [key: string]: string } {
    return {
      bindId: 'BindId',
      bindPortList: 'BindPortList',
      bindType: 'BindType',
      currentPage: 'CurrentPage',
      honeypotId: 'HoneypotId',
      id: 'Id',
      lang: 'Lang',
      pageSize: 'PageSize',
      ports: 'Ports',
      probeId: 'ProbeId',
      serviceIpList: 'ServiceIpList',
      setStatus: 'SetStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindId: 'string',
      bindPortList: { 'type': 'array', 'itemType': UpdateHoneypotProbeBindRequestBindPortList },
      bindType: 'string',
      currentPage: 'number',
      honeypotId: 'string',
      id: 'number',
      lang: 'string',
      pageSize: 'number',
      ports: 'string',
      probeId: 'string',
      serviceIpList: { 'type': 'array', 'itemType': 'string' },
      setStatus: 'number',
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

