// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteDBClusterResponseBodyData } from "./DeleteDbclusterResponseBodyData";


export class DeleteDBClusterResponseBody extends $dara.Model {
  data?: DeleteDBClusterResponseBodyData;
  /**
   * @example
   * F203FA74-3041-589F-BE66-E570793A0C91
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
      data: DeleteDBClusterResponseBodyData,
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

