// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceProvisionsResponseBodyServiceProvisions } from "./GetServiceProvisionsResponseBodyServiceProvisions";


export class GetServiceProvisionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DB1FA13E-1087-5654-84D5-58A0ACAD1B18
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the cloud services.
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

