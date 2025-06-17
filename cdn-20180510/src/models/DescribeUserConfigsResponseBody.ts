// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserConfigsResponseBodyConfigs } from "./DescribeUserConfigsResponseBodyConfigs";


export class DescribeUserConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations of the specified feature.
   */
  configs?: DescribeUserConfigsResponseBodyConfigs;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9BCC7BAA-ACBE-45E5-83F0-98BF7E693E84
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: DescribeUserConfigsResponseBodyConfigs,
      requestId: 'string',
    };
  }

  validate() {
    if(this.configs && typeof (this.configs as any).validate === 'function') {
      (this.configs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

