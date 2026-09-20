// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchServiceRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-uf6r2hn2zrxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * - open: Enable  
   * - close: Shutdown
   * 
   * This parameter is required.
   * 
   * @example
   * open
   */
  operate?: string;
  /**
   * @remarks
   * Service name.
   * 
   * This parameter is required.
   * 
   * @example
   * HBaseProxy
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      operate: 'Operate',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      operate: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

