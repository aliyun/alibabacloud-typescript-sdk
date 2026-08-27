// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceAccessResponseBodyServiceAccessInfo extends $dara.Model {
  /**
   * @remarks
   * Trusted service status.
   * 
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

export class GetServiceAccessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0DEFE672-690F-54C1-B42A-8E78E640BE07
   */
  requestId?: string;
  /**
   * @remarks
   * The trusted service details.
   */
  serviceAccessInfo?: GetServiceAccessResponseBodyServiceAccessInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceAccessInfo: 'ServiceAccessInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceAccessInfo: GetServiceAccessResponseBodyServiceAccessInfo,
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

