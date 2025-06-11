// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteInstancesResponseBodyData } from "./DeleteInstancesResponseBodyData";


export class DeleteInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DeleteInstancesResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-****-****-B3DB-A3DC0DE3C83E
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
      data: DeleteInstancesResponseBodyData,
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

