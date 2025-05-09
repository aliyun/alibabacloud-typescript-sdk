// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SimplyAddInstanceResponseBodyInstance extends $dara.Model {
  /**
   * @example
   * 192.168.XXX.XXX
   */
  host?: string;
  /**
   * @example
   * 188****
   */
  instanceId?: string;
  /**
   * @example
   * 5432
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      instanceId: 'InstanceId',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      instanceId: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

