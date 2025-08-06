// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DedicatedIpNonePoolListResponseBodyIps extends $dara.Model {
  /**
   * @remarks
   * Purchased instance ID
   * 
   * @example
   * xxx
   */
  id?: string;
  /**
   * @remarks
   * IP address
   * 
   * @example
   * xxx
   */
  ip?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ip: 'Ip',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ip: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DedicatedIpNonePoolListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Information on IPs not added to the IP pool
   */
  ips?: DedicatedIpNonePoolListResponseBodyIps[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * xxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ips: 'Ips',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ips: { 'type': 'array', 'itemType': DedicatedIpNonePoolListResponseBodyIps },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

