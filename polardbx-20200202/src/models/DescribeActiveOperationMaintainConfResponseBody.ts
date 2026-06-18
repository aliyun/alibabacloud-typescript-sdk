// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationMaintainConfResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-08-11T10:08:27Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The cycle time.
   * 
   * @example
   * 1,2,3,4,5,6,7
   */
  cycleTime?: string;
  /**
   * @remarks
   * The cycle type.
   * 
   * @example
   * Week
   */
  cycleType?: string;
  /**
   * @remarks
   * The end time of the O&M window.
   * 
   * @example
   * 04:00:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the O&M window.
   * 
   * @example
   * 04:00:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2021-08-11T10:08:27Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The status.
   * 
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
  /**
   * @remarks
   * The configuration information.
   */
  config?: DescribeActiveOperationMaintainConfResponseBodyConfig;
  /**
   * @remarks
   * Indicates whether the O&M window has been configured. Valid values:
   * 
   * - 1: configured.
   * - 0: not configured.
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

