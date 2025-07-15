// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePhysicalConnectionOccupancyOrderResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the order that is placed.
   * 
   * @example
   * 50187055895****
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

