// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The public endpoint of the service.
   * 
   * @example
   * http://pai-eas.cn-shanghai.****
   */
  internetEndpoint?: string;
  /**
   * @remarks
   * The internal endpoint of the service.
   * 
   * @example
   * http://pai-eas-vpc.cn-shanghai.****
   */
  intranetEndpoint?: string;
  /**
   * @remarks
   * The region ID of the service.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * eas-m-aaxxxddf
   */
  serviceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * foo
   */
  serviceName?: string;
  /**
   * @remarks
   * The service state.
   * 
   * @example
   * Creating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      internetEndpoint: 'InternetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
      region: 'Region',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetEndpoint: 'string',
      intranetEndpoint: 'string',
      region: 'string',
      requestId: 'string',
      serviceId: 'string',
      serviceName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

