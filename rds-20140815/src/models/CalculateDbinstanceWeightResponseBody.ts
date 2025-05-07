// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CalculateDBInstanceWeightResponseBodyItems } from "./CalculateDbinstanceWeightResponseBodyItems";


export class CalculateDBInstanceWeightResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of information about the system-assigned read weight.
   */
  items?: CalculateDBInstanceWeightResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C816A4BF-A6EC-4722-95F9-2055859CCFD2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: CalculateDBInstanceWeightResponseBodyItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

