// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateInstantSiteMonitorRequestTaskList extends $dara.Model {
  /**
   * @remarks
   * The URL or IP address of the site monitoring task.
   * 
   * > You must create at least one site monitoring task. The `Address`, `TaskName`, and `TaskType` parameters are required.
   * 
   * @example
   * https://www.aliyun.com
   */
  address?: string;
  /**
   * @remarks
   * The information about the detection points. If you leave this parameter empty, the system randomly selects three detection points.
   * 
   * The value must be a `JSONArray`. For example, `[{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]` corresponds to Beijing, Hangzhou, and Qingdao.
   * 
   * For more information about how to obtain detection point information, see [DescribeSiteMonitorISPCityList](https://help.aliyun.com/document_detail/115045.html).
   * 
   * @example
   * [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]
   */
  ispCities?: string;
  /**
   * @remarks
   * The advanced extension options for the protocol type of the site monitoring task. Different protocol types correspond to different extension options.
   * 
   * @example
   * {"time_out":5000}
   */
  optionsJson?: string;
  /**
   * @remarks
   * The name of the site monitoring task.
   * 
   * <props="china">
   * 
   * The value must be 4 to 100 characters in length and can contain English letters, numbers, underscores (_), and Chinese characters.
   * 
   * 
   * 
   * <props="intl">
   * 
   * The name of the site monitoring task.
   * 
   * 
   * 
   * <props="partner">
   * 
   * The name must be 4 to 100 characters in length and can contain letters, digits, and underscores (_).
   * 
   * 
   * 
   * > You must create at least one site monitoring task. The `Address`, `TaskName`, and `TaskType` parameters are required.
   * 
   * @example
   * HangZhou_ECS1
   */
  taskName?: string;
  /**
   * @remarks
   * The protocol type of the monitoring task.
   * 
   * Valid values: HTTP, PING, TCP, UDP, DNS, SMTP, POP3, and FTP.
   * 
   * > You must create at least one site monitoring task. The `Address`, `TaskName`, and `TaskType` parameters are required.
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
   * The list of site monitoring tasks.
   * 
   * > You must create at least one site monitoring task. The `Address`, `TaskName`, and `TaskType` parameters are required.
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

