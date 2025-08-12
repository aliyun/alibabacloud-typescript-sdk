// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateInstantSiteMonitorRequestTaskList extends $dara.Model {
  /**
   * @remarks
   * The URL or IP address that is monitored by the task.
   * 
   * >  You must create at least one site monitoring task. You must specify all of the `Address`, `TaskName`, and `TaskType` parameters in each request.
   * 
   * @example
   * https://www.aliyun.com
   */
  address?: string;
  /**
   * @remarks
   * The detection points. If you leave this parameter empty, the system randomly selects three detection points.
   * 
   * The value is a `JSON array`. Example: `{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}`. The values of the city field indicate Beijing, Hangzhou, and Qingdao.
   * 
   * For information about how to obtain detection points, see [DescribeSiteMonitorISPCityList](https://help.aliyun.com/document_detail/115045.html).
   * 
   * @example
   * [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]
   */
  ispCities?: string;
  /**
   * @remarks
   * The extended options of the protocol that is used by the site monitoring task. The options vary based on the protocol.
   * 
   * @example
   * {"time_out":5000}
   */
  optionsJson?: string;
  /**
   * @remarks
   * The name of the site monitoring task.
   * 
   * The name must be 4 to 100 characters in length, and can contain letters, digits, and underscores (_).
   * 
   * >  You must create at least one site monitoring task. You must specify all of the `Address`, `TaskName`, and `TaskType` parameters in each request.
   * 
   * @example
   * HangZhou_ECS1
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the site monitoring task.
   * 
   * Valid values: HTTP, PING, TCP, UDP, DNS, SMTP, POP3, and FTP.
   * 
   * >  You must create at least one site monitoring task. You must specify all of the `Address`, `TaskName`, and `TaskType` parameters in each request.
   * 
   * @example
   * HTTP
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      ispCities: 'IspCities',
      optionsJson: 'OptionsJson',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      ispCities: 'string',
      optionsJson: 'string',
      taskName: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateInstantSiteMonitorRequest extends $dara.Model {
  regionId?: string;
  /**
   * @remarks
   * The site monitoring tasks.
   * 
   * >  You must create at least one site monitoring task. You must specify all of the `Address`, `TaskName`, and `TaskType` parameters in each request.
   * 
   * This parameter is required.
   */
  taskList?: BatchCreateInstantSiteMonitorRequestTaskList[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      taskList: { 'type': 'array', 'itemType': BatchCreateInstantSiteMonitorRequestTaskList },
    };
  }

  validate() {
    if(Array.isArray(this.taskList)) {
      $dara.Model.validateArray(this.taskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

