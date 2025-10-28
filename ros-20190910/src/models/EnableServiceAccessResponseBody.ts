// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableServiceAccessResponseBodyServiceAccessInfo extends $dara.Model {
  /**
   * @example
   * ENABLED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class EnableServiceAccessResponseBody extends $dara.Model {
  /**
   * @example
   * 23045A5D-720E-5D11-A752-E1568F725C93
   */
  requestId?: string;
  serviceAccessInfo?: EnableServiceAccessResponseBodyServiceAccessInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceAccessInfo: 'ServiceAccessInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceAccessInfo: EnableServiceAccessResponseBodyServiceAccessInfo,
    };
  }

  validate() {
    if(this.serviceAccessInfo && typeof (this.serviceAccessInfo as any).validate === 'function') {
      (this.serviceAccessInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

