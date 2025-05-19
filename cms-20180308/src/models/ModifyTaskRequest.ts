// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTaskRequest extends $dara.Model {
  /**
   * @example
   * http://www.aliyun.com
   */
  address?: string;
  /**
   * @example
   * 5e9b-4c12-b39e-7f277ac44b11
   */
  alertIds?: string;
  /**
   * @example
   * [{"alarmActions":"xxx","metricName":"Availability","expression":"$Availability<96"}]
   */
  alertRule?: string;
  /**
   * @example
   * 1
   */
  interval?: string;
  intervalUnit?: string;
  /**
   * @example
   * [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]
   */
  ispCity?: string;
  options?: string;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8f880e3d-d924-47ab-84d2-fa1a72e24211
   */
  taskId?: string;
  /**
   * @example
   * aliyunTest
   */
  taskName?: string;
  /**
   * @example
   * cms
   */
  caller?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      alertIds: 'AlertIds',
      alertRule: 'AlertRule',
      interval: 'Interval',
      intervalUnit: 'IntervalUnit',
      ispCity: 'IspCity',
      options: 'Options',
      regionId: 'RegionId',
      taskId: 'TaskId',
      taskName: 'TaskName',
      caller: 'caller',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      alertIds: 'string',
      alertRule: 'string',
      interval: 'string',
      intervalUnit: 'string',
      ispCity: 'string',
      options: 'string',
      regionId: 'string',
      taskId: 'string',
      taskName: 'string',
      caller: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

