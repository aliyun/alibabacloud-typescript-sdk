// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetsScaProcessNumRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the application process. Default value: java. Valid values:
   * 
   * *   **java**
   * *   **php**
   * 
   * @example
   * java
   */
  bizType?: string;
  /**
   * @remarks
   * The UUIDs of the servers.
   * 
   * This parameter is required.
   */
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

