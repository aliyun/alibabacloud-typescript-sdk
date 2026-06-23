// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOSSStorageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether tiered storage for hot and cold data can be enabled. Valid values:
   * 
   * - **true**: Tiered storage can be enabled.
   * 
   * - **false**: Tiered storage cannot be enabled.
   * 
   * @example
   * true
   */
  coldStorage?: boolean;
  /**
   * @remarks
   * The parameters of the tiered storage policy for hot and cold data.
   * 
   * @example
   * [{ "currentValue":"0.1", "defaultValue":"0.1", "desc":"Ratio of free disk space. When the ratio exceeds the value of configuration parameter, ClickHouse start to move data to the cold storage", "name":"move_factor", "restart":true, "valueRange":"(0, 1]" },{ "currentValue":"true", "defaultValue":"true", "desc":"Disables merging of data parts on cold storage", "name":"prefer_not_to_merge", "restart":true, "valueRange":"true|false" }]
   */
  policy?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * aadbb456-ebf7-4ed8-9671-fad9f3846ca4
   */
  requestId?: string;
  /**
   * @remarks
   * The status of tiered storage for hot and cold data. Valid values:
   * 
   * - **CREATING**: Tiered storage is being enabled.
   * 
   * - **DISABLE**: Tiered storage is disabled.
   * 
   * - **ENABLE**: Tiered storage is enabled.
   * 
   * @example
   * ENABLE
   */
  state?: string;
  /**
   * @remarks
   * The cold storage space used. Unit: GB.
   * 
   * @example
   * 0.00
   */
  storageUsage?: string;
  static names(): { [key: string]: string } {
    return {
      coldStorage: 'ColdStorage',
      policy: 'Policy',
      requestId: 'RequestId',
      state: 'State',
      storageUsage: 'StorageUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldStorage: 'boolean',
      policy: 'string',
      requestId: 'string',
      state: 'string',
      storageUsage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

