// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAssetImportantRequest extends $dara.Model {
  /**
   * @remarks
   * The importance of the asset. Valid values:
   * 
   * *   **0**: test
   * *   **1**: normal
   * *   **2**: important
   * 
   * @example
   * 0
   */
  importantCode?: number;
  /**
   * @remarks
   * The UUIDs of servers. Separate multiple UUIDs with commas (,).
   * 
   * >  You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
   * 
   * @example
   * 076a446d-df7d-424c-bdc5-bb5dc7f1****
   */
  uuidList?: string;
  static names(): { [key: string]: string } {
    return {
      importantCode: 'ImportantCode',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importantCode: 'number',
      uuidList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

