// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserApiRequestResponseBodyRequests extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 76
   */
  count?: number;
  /**
   * @remarks
   * The type of the statistics. Valid values:
   * 
   * *   **client_list**: client
   * *   **ip**: IP address
   * *   **region_id** region
   * *   **country_id**: country
   * 
   * @example
   * {
   *     "client_list": [
   *         "Unknown"
   *     ],
   *     "ip": "47.92.113.***",
   *     "region_id": "110000",
   *     "country_id": "CN"
   * }
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserApiRequestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D13E4540-4432-5AD7-B216-6369512514F4
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics.
   */
  requests?: DescribeUserApiRequestResponseBodyRequests[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      requests: 'Requests',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      requests: { 'type': 'array', 'itemType': DescribeUserApiRequestResponseBodyRequests },
    };
  }

  validate() {
    if(Array.isArray(this.requests)) {
      $dara.Model.validateArray(this.requests);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

