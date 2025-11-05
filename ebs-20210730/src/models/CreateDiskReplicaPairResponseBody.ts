// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiskReplicaPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 123456****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the replication pair.
   * 
   * @example
   * pair-cn-dsa****
   */
  replicaPairId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      replicaPairId: 'ReplicaPairId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      replicaPairId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

