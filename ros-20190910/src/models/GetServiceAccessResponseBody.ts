// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceAccessResponseBodyServiceAccessInfo extends $dara.Model {
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
  requestId?: string;
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

