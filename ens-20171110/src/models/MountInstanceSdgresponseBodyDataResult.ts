// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MountInstanceSDGResponseBodyDataResultFailedItems } from "./MountInstanceSdgresponseBodyDataResultFailedItems";


export class MountInstanceSDGResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The number of failed tasks.
   * 
   * @example
   * 0
   */
  failedCount?: number;
  /**
   * @remarks
   * Details about failed tasks.
   */
  failedItems?: MountInstanceSDGResponseBodyDataResultFailedItems[];
  /**
   * @remarks
   * The number of successful tasks.
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
      failedItems: { 'type': 'array', 'itemType': MountInstanceSDGResponseBodyDataResultFailedItems },
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

