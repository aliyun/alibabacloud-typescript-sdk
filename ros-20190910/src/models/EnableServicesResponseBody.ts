// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableServicesResponseBodyFailedServices extends $dara.Model {
  /**
   * @example
   * 400
   */
  code?: string;
  /**
   * @example
   * Failed
   */
  message?: string;
  /**
   * @example
   * ACVS
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
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

export class EnableServicesResponseBody extends $dara.Model {
  failedServices?: EnableServicesResponseBodyFailedServices[];
  /**
   * @example
   * E1BD3327-6BEE-53AD-8788-D892EB575962
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedServices: 'FailedServices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedServices: { 'type': 'array', 'itemType': EnableServicesResponseBodyFailedServices },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.failedServices)) {
      $dara.Model.validateArray(this.failedServices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

