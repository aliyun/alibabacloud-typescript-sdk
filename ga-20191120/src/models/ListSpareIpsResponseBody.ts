// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSpareIpsResponseBodySpareIps extends $dara.Model {
  /**
   * @remarks
   * The secondary IP address that is associated with the CNAME. If the acceleration area becomes unavailable, GA redirects traffic to the secondary IP address.
   * 
   * @example
   * 47.100.XX.XX
   */
  spareIp?: string;
  /**
   * @remarks
   * The status of the secondary IP address. Valid values:
   * 
   * *   **active:** The secondary IP address is available.
   * *   **inuse:** The secondary IP address is in use.
   * 
   * @example
   * active
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      spareIp: 'SpareIp',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spareIp: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpareIpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6FEA0CF3-D3B9-43E5-A304-D217037876A8
   */
  requestId?: string;
  /**
   * @remarks
   * The secondary IP addresses that are associated with the CNAME.
   */
  spareIps?: ListSpareIpsResponseBodySpareIps[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spareIps: 'SpareIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spareIps: { 'type': 'array', 'itemType': ListSpareIpsResponseBodySpareIps },
    };
  }

  validate() {
    if(Array.isArray(this.spareIps)) {
      $dara.Model.validateArray(this.spareIps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

