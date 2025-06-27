// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGtmMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the health check configuration.
   * 
   * @example
   * 1234abc
   */
  monitorConfigId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorConfigId: 'MonitorConfigId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorConfigId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

