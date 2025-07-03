// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeActiveOperationMaintainConfResponseBodyConfig } from "./DescribeActiveOperationMaintainConfResponseBodyConfig";


export class DescribeActiveOperationMaintainConfResponseBody extends $dara.Model {
  config?: DescribeActiveOperationMaintainConfResponseBodyConfig;
  /**
   * @example
   * 1
   */
  hasConfig?: number;
  /**
   * @example
   * 1A586DCB-39A6-4050-81CC-C7BD4CCDB49F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      hasConfig: 'HasConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: DescribeActiveOperationMaintainConfResponseBodyConfig,
      hasConfig: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

