// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePhysicalConnectionOccupancyOrderResponseBodyData } from "./CreatePhysicalConnectionOccupancyOrderResponseBodyData";


export class CreatePhysicalConnectionOccupancyOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details.
   */
  data?: CreatePhysicalConnectionOccupancyOrderResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B9300FE-11E2-4E3B-949C-BED3B44DD26D
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
      data: CreatePhysicalConnectionOccupancyOrderResponseBodyData,
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

