// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFootprintListResponseBodyData } from "./GetFootprintListResponseBodyData";


export class GetFootprintListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetFootprintListResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 06DA2909-7736-5738-AA31-ACD617D828F1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetFootprintListResponseBodyData,
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

