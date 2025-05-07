// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiRoutePoliciesFallbackDestinations extends $dara.Model {
  appId?: string;
  appName?: string;
  serviceId?: string;
  serviceName?: string;
  servicePort?: number;
  serviceProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      servicePort: 'ServicePort',
      serviceProtocol: 'ServiceProtocol',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

