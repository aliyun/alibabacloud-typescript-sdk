// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetTestResultsResponseBodyNetTestResultsDelayTestHosts extends $dara.Model {
  /**
   * @remarks
   * Bond interface of the network card
   * 
   * @example
   * bond1
   */
  bond?: string;
  /**
   * @remarks
   * Node IP
   * 
   * @example
   * pgm-bp174z988a27wre71o.pg.rds.aliyuncs.com
   */
  IP?: string;
  /**
   * @remarks
   * 资源id
   * 
   * @example
   * e01-cn-wwo3eteze19
   */
  resourceId?: string;
  /**
   * @remarks
   * Service name
   * 
   * @example
   * WrF
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

