// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://www.aliyun.com
   */
  address?: string;
  alertIds?: string;
  alertRule?: string;
  /**
   * @example
   * 1
   */
  interval?: string;
  intervalUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]
   */
  ispCity?: string;
  /**
   * @example
   * {"http_method":"get","header":"xx=bb","cookie":"test=aa","time_out":30000,"match_rule":0,"response_content":"aa"}
   */
  options?: string;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aliyunTest
   */
  taskName?: string;
  /**
   * @remarks
   * 1.http
   * 2.ping
   * 3.tcp
   * 4.udp
   * 5.dns
   * 6.smtp
   * 7.pop3
   * 8.ftp
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  taskType?: string;
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
      taskName: 'TaskName',
      taskType: 'TaskType',
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
      taskName: 'string',
      taskType: 'string',
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

