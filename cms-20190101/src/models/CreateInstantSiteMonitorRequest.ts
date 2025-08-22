// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstantSiteMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The URL or IP address that you want to test.
   * 
   * This parameter is required.
   * 
   * @example
   * http://www.aliyun.com
   */
  address?: string;
  agentGroup?: string;
  /**
   * @remarks
   * The detection points. If you leave this parameter empty, the system randomly selects three detection points.
   * 
   * The value is a `JSON array`. Example: {"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}. The values of the city field indicate Beijing, Hangzhou, and Qingdao.
   * 
   * For information about how to obtain detection points, see [DescribeSiteMonitorISPCityList](https://help.aliyun.com/document_detail/115045.html).
   * 
   * > You must specify one of the `IspCities` and `RandomIspCity` parameters.
   * 
   * @example
   * [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]
   */
  ispCities?: string;
  /**
   * @remarks
   * The extended options of the protocol that is used by the instant test task. The options vary based on the protocol.
   * 
   * @example
   * {"time_out":5000}
   */
  optionsJson?: string;
  /**
   * @remarks
   * The number of detection points.
   * 
   * > 
   * 
   * *   You must specify one of the `IspCities` and `RandomIspCity` parameters. If you specify the `RandomIspCity` parameter, the `IspCities` parameter automatically becomes invalid.
   * 
   * @example
   * 1
   */
  randomIspCity?: number;
  regionId?: string;
  /**
   * @remarks
   * The name of the instant test task.
   * 
   * The name must be 4 to 100 characters in length, and can contain letters, digits, and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * task1
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the instant test task. Valid values: HTTP, PING, TCP, UDP, and DNS.
   * 
   * This parameter is required.
   * 
   * @example
   * HTTP
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      agentGroup: 'AgentGroup',
      ispCities: 'IspCities',
      optionsJson: 'OptionsJson',
      randomIspCity: 'RandomIspCity',
      regionId: 'RegionId',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      agentGroup: 'string',
      ispCities: 'string',
      optionsJson: 'string',
      randomIspCity: 'number',
      regionId: 'string',
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

