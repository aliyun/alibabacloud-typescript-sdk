// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyUsageTopResponseBodyTopStatisticItems extends $dara.Model {
  /**
   * @remarks
   * The quantity.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The statistical item.
   * 
   * @example
   * openssl
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUsageTopResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of fingerprints.
   * 
   * @example
   * 5
   */
  itemCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16AA5B62-A3C1-520B-B289-4BD971CC17AB
   */
  requestId?: string;
  /**
   * @remarks
   * The statistical results.
   */
  topStatisticItems?: DescribePropertyUsageTopResponseBodyTopStatisticItems[];
  /**
   * @remarks
   * The type of the asset fingerprint. Valid value:
   * 
   * *   **port**: port
   * *   **process**: process
   * *   **software**: software
   * *   **user**: account
   * *   **sca**: middleware
   * 
   * @example
   * sca
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      itemCount: 'ItemCount',
      requestId: 'RequestId',
      topStatisticItems: 'TopStatisticItems',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemCount: 'number',
      requestId: 'string',
      topStatisticItems: { 'type': 'array', 'itemType': DescribePropertyUsageTopResponseBodyTopStatisticItems },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.topStatisticItems)) {
      $dara.Model.validateArray(this.topStatisticItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

