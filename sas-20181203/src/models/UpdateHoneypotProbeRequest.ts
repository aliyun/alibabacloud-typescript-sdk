// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHoneypotProbeRequest extends $dara.Model {
  /**
   * @remarks
   * The ARP check type.
   * 
   * @example
   * false
   */
  arp?: boolean;
  /**
   * @remarks
   * The probe name.
   * 
   * @example
   * svwsx-vpc-4430
   */
  displayName?: string;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ping detection type.
   * 
   * @example
   * true
   */
  ping?: boolean;
  /**
   * @remarks
   * The probe ID.
   * >You can call the [ListHoneypotProbe](~~ListHoneypotProbe~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bbe7e382-956f-473e-beed-bc73a258****
   */
  probeId?: string;
  /**
   * @remarks
   * The list of listening IP addresses.
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

