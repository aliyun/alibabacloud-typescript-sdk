// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDBInstanceEndpointAddressResponseBodyData } from "./CreateDbinstanceEndpointAddressResponseBodyData";


export class CreateDBInstanceEndpointAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: CreateDBInstanceEndpointAddressResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 08A3B71B-FE08-4B03-974F-CC7EA6DB1828
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateDBInstanceEndpointAddressResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

