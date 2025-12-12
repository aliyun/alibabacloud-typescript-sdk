// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationMaintainConfResponseBodyConfig extends $dara.Model {
  /**
   * @example
   * 2025-03-18T06:51:11+08:00
   */
  createdTime?: string;
  /**
   * @example
   * 1
   */
  cycleTime?: string;
  /**
   * @example
   * Week
   */
  cycleType?: string;
  /**
   * @example
   * 22:00Z
   */
  maintainEndTime?: string;
  /**
   * @example
   * 18:00Z
   */
  maintainStartTime?: string;
  /**
   * @example
   * 2025-06-27T07:12:53Z
   */
  modifiedTime?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      cycleTime: 'CycleTime',
      cycleType: 'CycleType',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      modifiedTime: 'ModifiedTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      cycleTime: 'string',
      cycleType: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      modifiedTime: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationMaintainConfResponseBody extends $dara.Model {
  config?: DescribeActiveOperationMaintainConfResponseBodyConfig;
  /**
   * @example
   * 1
   */
  hasConfig?: number;
  /**
   * @example
   * 9A23C87D-87DF-4DA0-A50E-CB13F4F7923D
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

