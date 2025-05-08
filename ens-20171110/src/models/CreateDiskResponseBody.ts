// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instances.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The ID of the order. Multiple IDs are separated by commas (,).
   * 
   * >  This parameter is not returned for the pay-as-you-go billing method.
   * 
   * @example
   * 21127020370****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7030AB96-57CF-1C68-9FEE-D60E547FD79C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

