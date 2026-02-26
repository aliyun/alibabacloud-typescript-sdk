// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultiAccountResourceCenterServiceStatusResponseBody extends $dara.Model {
  initialStatus?: string;
  requestId?: string;
  serviceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      initialStatus: 'InitialStatus',
      requestId: 'RequestId',
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initialStatus: 'string',
      requestId: 'string',
      serviceStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

