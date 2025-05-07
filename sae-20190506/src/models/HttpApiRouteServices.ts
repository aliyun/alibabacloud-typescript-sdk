// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiRouteServices extends $dara.Model {
  appId?: string;
  appName?: string;
  serviceId?: string;
  serviceName?: string;
  servicePort?: number;
  /**
   * @example
   * HTTP
   */
  serviceProtocol?: string;
  /**
   * @example
   * 90
   */
  serviceWeight?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      servicePort: 'ServicePort',
      serviceProtocol: 'ServiceProtocol',
      serviceWeight: 'ServiceWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      serviceId: 'string',
      serviceName: 'string',
      servicePort: 'number',
      serviceProtocol: 'string',
      serviceWeight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

