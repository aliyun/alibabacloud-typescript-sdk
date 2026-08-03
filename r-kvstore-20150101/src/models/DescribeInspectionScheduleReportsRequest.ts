// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInspectionScheduleReportsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ta-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @example
   * 10
   */
  pageNum?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * scheduleId-202604141xxxx
   */
  scheduleId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      scheduleId: 'ScheduleId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      scheduleId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

