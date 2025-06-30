// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeConfigsResponseBodyConfigList } from "./DescribeConfigsResponseBodyConfigList";


export class DescribeConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of common configuration items for alerts.
   */
  configList?: DescribeConfigsResponseBodyConfigList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configList: 'ConfigList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configList: { 'type': 'array', 'itemType': DescribeConfigsResponseBodyConfigList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configList)) {
      $dara.Model.validateArray(this.configList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

