// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The public endpoint of the service.
   * 
   * @example
   * http://10123*****.cn-shanghai.aliyuncs.com/api/predict/echo
   */
  internetEndpoint?: string;
  /**
   * @remarks
   * The private endpoint of the service.
   * 
   * @example
   * http://10123*****.vpc.cn-shanghai.aliyuncs.com/api/predict/echo
   */
  intranetEndpoint?: string;
  /**
   * @remarks
   * Id of the request
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
   * eas-m-r9knx7n9guf2p*****
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
   * The service status.
   * 
   * @example
   * Creating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      internetEndpoint: 'InternetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
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

