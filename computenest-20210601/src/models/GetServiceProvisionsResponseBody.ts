// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceProvisionsResponseBodyServiceProvisions } from "./GetServiceProvisionsResponseBodyServiceProvisions";


export class GetServiceProvisionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8C27145F-C9F4-545D-A355-DCDDAD63D548
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the services.
   */
  serviceProvisions?: GetServiceProvisionsResponseBodyServiceProvisions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceProvisions: 'ServiceProvisions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceProvisions: { 'type': 'array', 'itemType': GetServiceProvisionsResponseBodyServiceProvisions },
    };
  }

  validate() {
    if(Array.isArray(this.serviceProvisions)) {
      $dara.Model.validateArray(this.serviceProvisions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

