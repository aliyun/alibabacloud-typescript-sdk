// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeConfigHistoryResponseBodyConfigHistoryItems } from "./DescribeConfigHistoryResponseBodyConfigHistoryItems";


export class DescribeConfigHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The change records of the configuration parameters.
   */
  configHistoryItems?: DescribeConfigHistoryResponseBodyConfigHistoryItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD8660E9CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configHistoryItems: 'ConfigHistoryItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configHistoryItems: { 'type': 'array', 'itemType': DescribeConfigHistoryResponseBodyConfigHistoryItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configHistoryItems)) {
      $dara.Model.validateArray(this.configHistoryItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

