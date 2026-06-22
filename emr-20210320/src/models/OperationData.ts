// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperationData extends $dara.Model {
  /**
   * @remarks
   * The number of units actually delivered.
   */
  actualDeliveredAmounts?: number;
  /**
   * @remarks
   * The IDs of instances that could not be refunded.
   */
  failedRefundInstanceIds?: string[];
  /**
   * @remarks
   * The number of units requested.
   */
  toBeDeliveredAmounts?: number;
  static names(): { [key: string]: string } {
    return {
      actualDeliveredAmounts: 'actualDeliveredAmounts',
      failedRefundInstanceIds: 'failedRefundInstanceIds',
      toBeDeliveredAmounts: 'toBeDeliveredAmounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualDeliveredAmounts: 'number',
      failedRefundInstanceIds: { 'type': 'array', 'itemType': 'string' },
      toBeDeliveredAmounts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failedRefundInstanceIds)) {
      $dara.Model.validateArray(this.failedRefundInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

