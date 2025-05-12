// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDBClusterBindingResponseBodyData } from "./CreateDbclusterBindingResponseBodyData";


export class CreateDBClusterBindingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: CreateDBClusterBindingResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4773E4EC-025D-509F-AEA9-D53123FDFB0F
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
      data: CreateDBClusterBindingResponseBodyData,
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

