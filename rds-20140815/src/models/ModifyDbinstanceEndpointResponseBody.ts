// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceEndpointResponseBodyData } from "./ModifyDbinstanceEndpointResponseBodyData";


export class ModifyDBInstanceEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ModifyDBInstanceEndpointResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F2911788-25E8-42E5-A3A3-1B38D263F01E
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
      data: ModifyDBInstanceEndpointResponseBodyData,
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

