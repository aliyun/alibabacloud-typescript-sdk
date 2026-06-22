// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHoneypotProbeBindRequestBindPortList extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to bind the port. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * false
   */
  bindPort?: boolean;
  /**
   * @remarks
   * The end port that the probe listens on.
   * 
   * @example
   * 81
   */
  endPort?: number;
  /**
   * @remarks
   * Specifies whether the port is fixed. Valid values:
   * 
   * - **0**: No.
   * - **1**: Yes.
   * 
   * @example
   * 0
   */
  fixed?: boolean;
  /**
   * @remarks
   * The unique identifier of the bound port.
   * 
   * @example
   * 3183
   */
  id?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - **tcp**
   * - **udp**.
   * 
   * @example
   * tcp
   */
  proto?: string;
  /**
   * @remarks
   * The start port that the probe listens on.
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
   * The unique ID of the bound service.
   * 
   * @example
   * f52e8624-e43c-473c-8312-e0fed384****
   */
  bindId?: string;
  /**
   * @remarks
   * The list of bound ports.
   */
  bindPortList?: UpdateHoneypotProbeBindRequestBindPortList[];
  /**
   * @remarks
   * The service binding type. Valid values:
   * 
   * - **forward_honey**: forward to honeypot
   * - **scan_port**: listen for scans.
   * 
   * @example
   * forward_honey
   */
  bindType?: string;
  /**
   * @remarks
   * The page number of the page to return. Minimum value: **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The honeypot ID.
   * > You can call the [ListHoneypot](~~ListHoneypot~~) operation to obtain this value.
   * 
   * @example
   * dba7d44775be8e0e5888ee3b1a62554a93d2512247cabc38ddeac17a3b3f****
   */
  honeypotId?: string;
  /**
   * @remarks
   * The probe service port ID.
   * 
   * @example
   * 1906
   */
  id?: number;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page when using paged query. Default value: 20. If you leave this parameter empty, 20 entries are returned per page by paging.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The listening port range.
   * 
   * @example
   * {\\"tcp\\":\\"1-65535\\",\\"udp\\":\\"1-65535\\"}
   */
  ports?: string;
  /**
   * @remarks
   * The probe ID.
   * >You can call the [ListHoneypotProbe](~~ListHoneypotProbe~~) operation to obtain this parameter.
   * 
   * @example
   * 36bad711-d1ac-4419-ac68-c1aa280f****
   */
  probeId?: string;
  /**
   * @remarks
   * The list of listening IP addresses.
   */
  serviceIpList?: string[];
  /**
   * @remarks
   * The listening port status setting.
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

