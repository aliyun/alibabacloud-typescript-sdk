// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteDBInstanceEndpointResponseBodyData } from "./DeleteDbinstanceEndpointResponseBodyData";


export class DeleteDBInstanceEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DeleteDBInstanceEndpointResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 224DB9F7-3100-4899-AB9C-C938BCCB43E7
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
      data: DeleteDBInstanceEndpointResponseBodyData,
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

