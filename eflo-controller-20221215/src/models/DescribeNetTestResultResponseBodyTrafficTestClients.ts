// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetTestResultResponseBodyTrafficTestClients extends $dara.Model {
  /**
   * @example
   * bond1
   */
  bond?: string;
  /**
   * @example
   * 192.168.1.1
   */
  IP?: string;
  /**
   * @example
   * e01-cn-20s41p6cx01
   */
  resourceId?: string;
  /**
   * @example
   * xMv
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

