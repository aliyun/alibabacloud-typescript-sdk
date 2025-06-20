// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetTestResultResponseBodyCommTestHosts extends $dara.Model {
  /**
   * @example
   * 169.253.253.15
   */
  IP?: string;
  /**
   * @example
   * i111670831721110797708
   */
  resourceId?: string;
  /**
   * @example
   * VBw
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

