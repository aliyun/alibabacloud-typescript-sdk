// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListESAIPInfoRequest extends $dara.Model {
  /**
   * @remarks
   * You can enter IPv4 or IPv6 addresses. Separate multiple IP addresses with commas (,). You can enter up to 20 IP addresses at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.0.0.24,2408:8740:41FF:2:23::7FE,0.0.0.0,abcd
   */
  vipInfo?: string;
  static names(): { [key: string]: string } {
    return {
      vipInfo: 'VipInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vipInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

