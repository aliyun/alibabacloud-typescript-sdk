// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHoneypotProbeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether address resolution protocol (ARP) is enabled for the check type.
   * 
   * @example
   * false
   */
  arp?: boolean;
  /**
   * @remarks
   * The name of the probe.
   * 
   * @example
   * svwsx-vpc-4430
   */
  displayName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether ping is enabled for the check type.
   * 
   * @example
   * true
   */
  ping?: boolean;
  /**
   * @remarks
   * The ID of the probe.
   * 
   * > You can call the [ListHoneypotProbe](~~ListHoneypotProbe~~) operation to query the IDs of probes.
   * 
   * This parameter is required.
   * 
   * @example
   * bbe7e382-956f-473e-beed-bc73a258****
   */
  probeId?: string;
  /**
   * @remarks
   * The IP addresses that are monitored.
   */
  serviceIpList?: string[];
  static names(): { [key: string]: string } {
    return {
      arp: 'Arp',
      displayName: 'DisplayName',
      lang: 'Lang',
      ping: 'Ping',
      probeId: 'ProbeId',
      serviceIpList: 'ServiceIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arp: 'boolean',
      displayName: 'string',
      lang: 'string',
      ping: 'boolean',
      probeId: 'string',
      serviceIpList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serviceIpList)) {
      $dara.Model.validateArray(this.serviceIpList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

