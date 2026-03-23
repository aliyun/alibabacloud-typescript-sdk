// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationMaintainConfResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * Creation Time, formatted as YYYY-MM-DDTHH:mm:ssZ
   * 
   * @example
   * 2018-05-30T14:30:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * Cycle time, with multiple values concatenated by English commas  
   * * When cycleType is Week, values 1–7 represent Monday–Sunday  
   * * When cycleType is Month, values 1–28 are allowed
   * 
   * @example
   * 1
   */
  cycleTime?: string;
  /**
   * @remarks
   * Cycle type, either Month or Week
   * 
   * @example
   * Week
   */
  cycleType?: string;
  /**
   * @remarks
   * End time of the O&M time window, in UTC  
   * Default: 20:00:00Z
   * 
   * @example
   * 20:00:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * Start time of the O&M time window, in UTC  
   * Default: 18:00:00Z
   * 
   * @example
   * 18:00:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * Updated At, formatted as YYYY-MM-DDTHH:mm:ssZ, for example, 2018-05-30T14:30:00Z
   * 
   * @example
   * 2018-05-30T14:30:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * Whether it is effective  
   * * 1: Valid  
   * * 2: Invalid
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
   * Configuration Information
   */
  config?: DescribeActiveOperationMaintainConfResponseBodyConfig;
  /**
   * @remarks
   * Whether a configuration has been set; for the first access, hasConfig is 0  
   * * 1: Yes  
   * * 0: No
   * 
   * @example
   * 1
   */
  hasConfig?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 4438AC3E-ABE3-5943-9436-***********
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

