// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupEndpointsResponseBodyEndpoints extends $dara.Model {
  backendId?: string;
  endpointType?: string;
  internetEndpoints?: string[];
  intranetEndpoints?: string[];
  pathType?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      endpointType: 'EndpointType',
      internetEndpoints: 'InternetEndpoints',
      intranetEndpoints: 'IntranetEndpoints',
      pathType: 'PathType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      endpointType: 'string',
      internetEndpoints: { 'type': 'array', 'itemType': 'string' },
      intranetEndpoints: { 'type': 'array', 'itemType': 'string' },
      pathType: 'string',
      port: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.internetEndpoints)) {
      $dara.Model.validateArray(this.internetEndpoints);
    }
    if(Array.isArray(this.intranetEndpoints)) {
      $dara.Model.validateArray(this.intranetEndpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

