// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDBInstanceEndpointResponseBodyData } from "./CreateDbinstanceEndpointResponseBodyData";


export class CreateDBInstanceEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: CreateDBInstanceEndpointResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C8E88DED-533F-4B3C-9207-731FBF394CCA
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
      data: CreateDBInstanceEndpointResponseBodyData,
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

