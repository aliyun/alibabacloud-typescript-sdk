// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeActiveOperationMaintainConfResponseBodyConfig } from "./DescribeActiveOperationMaintainConfResponseBodyConfig";


export class DescribeActiveOperationMaintainConfResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried configuration information.
   */
  config?: DescribeActiveOperationMaintainConfResponseBodyConfig;
  /**
   * @remarks
   * Indicates whether the O\\&M task is configured. Valid values:
   * 
   * *   1: yes.
   * *   0: no.
   * 
   * @example
   * 1
   */
  hasConfig?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 92B3D2F0-B5E3-5592-9A6F-D0A6C34ACBA9
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

