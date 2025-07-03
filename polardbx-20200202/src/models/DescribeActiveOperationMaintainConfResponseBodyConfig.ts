// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationMaintainConfResponseBodyConfig extends $dara.Model {
  /**
   * @example
   * 2021-08-11T10:08:27Z
   */
  createdTime?: string;
  /**
   * @example
   * 1,2,3,4,5,6,7
   */
  cycleTime?: string;
  /**
   * @example
   * Week
   */
  cycleType?: string;
  /**
   * @example
   * 04:00:00Z
   */
  maintainEndTime?: string;
  /**
   * @example
   * 04:00:00Z
   */
  maintainStartTime?: string;
  /**
   * @example
   * 2021-08-11T10:08:27Z
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

