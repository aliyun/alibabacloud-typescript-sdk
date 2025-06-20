// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetTestResultsResponseBodyNetTestResultsCommTestHosts extends $dara.Model {
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 10.51.16.21
   */
  IP?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * e01-cn-wwo3eteze19
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * www.xinjiaoyu.com
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

