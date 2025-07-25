// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetTestResultResponseBodyDelayTestHosts extends $dara.Model {
  /**
   * @example
   * bond1
   */
  bond?: string;
  /**
   * @example
   * 125.210.225.48
   */
  IP?: string;
  /**
   * @example
   * e01-cn-bcd3u1aee06
   */
  resourceId?: string;
  /**
   * @example
   * NQU
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      bond: 'Bond',
      IP: 'IP',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bond: 'string',
      IP: 'string',
      resourceId: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

