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

