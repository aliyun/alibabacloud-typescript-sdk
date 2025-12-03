// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchServiceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-uf6r2hn2zrxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * open
   */
  operate?: string;
  /**
   * @remarks
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

