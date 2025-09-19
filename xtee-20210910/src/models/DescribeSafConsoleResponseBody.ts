// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSafConsoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result.
   */
  bizData?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      bizData: 'bizData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      bizData: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.bizData)) {
      $dara.Model.validateArray(this.bizData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

