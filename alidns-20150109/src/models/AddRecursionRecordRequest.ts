// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRecursionRecordRequest extends $dara.Model {
  /**
   * @example
   * 6447728c8578e66aacf062d2df4446dc
   */
  clientToken?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * default
   */
  requestSource?: string;
  /**
   * @example
   * www
   */
  rr?: string;
  /**
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @example
   * A
   */
  type?: string;
  /**
   * @example
   * 192.168.0.1
   */
  userClientIp?: string;
  /**
   * @example
   * 1.1.1.1
   */
  value?: string;
  /**
   * @example
   * 2
   */
  weight?: number;
  /**
   * @remarks
   * Zone ID。
   * 
   * @example
   * 173671468000011
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      priority: 'Priority',
      requestSource: 'RequestSource',
      rr: 'Rr',
      ttl: 'Ttl',
      type: 'Type',
      userClientIp: 'UserClientIp',
      value: 'Value',
      weight: 'Weight',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      priority: 'number',
      requestSource: 'string',
      rr: 'string',
      ttl: 'number',
      type: 'string',
      userClientIp: 'string',
      value: 'string',
      weight: 'number',
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

