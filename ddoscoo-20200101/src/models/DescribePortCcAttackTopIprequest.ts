// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortCcAttackTopIPRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address of the Anti-DDoS Pro or Anti-DDoS Premium instance to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 203.107.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The attacked port.
   * 
   * This parameter is required.
   * 
   * @example
   * 6663
   */
  port?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1678017453
   */
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      limit: 'Limit',
      port: 'Port',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      limit: 'number',
      port: 'string',
      startTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

