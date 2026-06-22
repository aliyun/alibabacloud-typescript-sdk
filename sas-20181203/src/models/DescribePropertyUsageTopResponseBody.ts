// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyUsageTopResponseBodyTopStatisticItems extends $dara.Model {
  /**
   * @remarks
   * The count.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The statistics item.
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
   * The ID of the request. The ID is a unique identifier that Alibaba Cloud generates for the request and can be used to troubleshoot issues.
   * 
   * @example
   * 16AA5B62-A3C1-520B-B289-4BD971CC17AB
   */
  requestId?: string;
  /**
   * @remarks
   * The collection of statistics results.
   */
  topStatisticItems?: DescribePropertyUsageTopResponseBodyTopStatisticItems[];
  /**
   * @remarks
   * The Asset Fingerprints type. Valid values:
   * 
   * - **port**: port
   * - **process**: process
   * - **software**: software
   * - **user**: account
   * - **sca**: middleware.
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

