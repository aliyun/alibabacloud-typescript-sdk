// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RemoveSDGsResponseBodyDataResultFailedItems } from "./RemoveSdgsResponseBodyDataResultFailedItems";


export class RemoveSDGsResponseBodyDataResult extends $dara.Model {
  /**
   * @example
   * 0
   */
  failedCount?: number;
  failedItems?: RemoveSDGsResponseBodyDataResultFailedItems[];
  /**
   * @example
   * 1
   */
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedCount: 'FailedCount',
      failedItems: 'FailedItems',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCount: 'number',
      failedItems: { 'type': 'array', 'itemType': RemoveSDGsResponseBodyDataResultFailedItems },
      successCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failedItems)) {
      $dara.Model.validateArray(this.failedItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

