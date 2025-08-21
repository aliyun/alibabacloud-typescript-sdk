// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcEndpointResponseBodyResult extends $dara.Model {
  /**
   * @example
   * ep-bp1tah7zbrwmkjef****.epsrv-bp1w0p3jdirbfmt6****.cn-hangzhou.privatelink.aliyuncs.com
   */
  endpointDomain?: string;
  /**
   * @example
   * ep-bp1tah7zbrwmkjef****
   */
  endpointId?: string;
  /**
   * @example
   * vpcElasticSearchABC
   */
  endpointName?: string;
  /**
   * @remarks
   * The name of the service VPC-side endpoint.
   * 
   * @example
   * epsrv-bp1w0p3jdirbfmt6****
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointDomain: 'endpointDomain',
      endpointId: 'endpointId',
      endpointName: 'endpointName',
      serviceId: 'serviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointDomain: 'string',
      endpointId: 'string',
      endpointName: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The endpoint domain name, which is used to configure the connection.
   * 
   * @example
   * F99407AB-2FA9-489E-A259-40CF6DCC47D9
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the endpoint on the service VPC side.
   */
  result?: CreateVpcEndpointResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateVpcEndpointResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

