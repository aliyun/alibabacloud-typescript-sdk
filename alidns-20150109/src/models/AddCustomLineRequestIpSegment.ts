// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddCustomLineRequestIpSegment extends $dara.Model {
  /**
   * @remarks
   * The end IP address of the CIDR block.
   * 
   * @example
   * 192.0.2.254
   */
  endIp?: string;
  /**
   * @remarks
   * The start IP address of the CIDR block.
   * 
   * @example
   * 192.0.2.0
   */
  startIp?: string;
  static names(): { [key: string]: string } {
    return {
      endIp: 'EndIp',
      startIp: 'StartIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endIp: 'string',
      startIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

