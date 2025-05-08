// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CopySDGResponseBodyDataResultFailedItems } from "./CopySdgresponseBodyDataResultFailedItems";


export class CopySDGResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The number of failed nodes.
   * 
   * @example
   * 0
   */
  failedCount?: number;
  /**
   * @remarks
   * Details of failed nodes.
   */
  failedItems?: CopySDGResponseBodyDataResultFailedItems[];
  /**
   * @remarks
   * The number of successful nodes.
   * 
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
      failedItems: { 'type': 'array', 'itemType': CopySDGResponseBodyDataResultFailedItems },
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

