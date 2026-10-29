// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstantSiteMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The URL or IP address of the synthetic monitoring task.
   * 
   * This parameter is required.
   * 
   * @example
   * http://www.aliyun.com
   */
  address?: string;
  /**
   * @remarks
   * The type of detection points. Valid values: PC and MOBILE. PC indicates fixed-line network detection points. MOBILE indicates mobile network detection points. Default value: PC.
   * 
   * @example
   * PC
   */
  agentGroup?: string;
  /**
   * @remarks
   * The detection point information. If this parameter is left empty, the system randomly selects three detection points.
   * 
   * The value is in `JSONArray` format. Example: [{"city":"546","isp":"465", "type":"IDC"},{"city":"572","isp":"465", "type":"LASTMILE"},{"city":"738","isp":"465"}], which correspond to Beijing, Hangzhou, and Qingdao respectively.
   * 
   * The type field specifies the detection point type. When AgentGroup is set to PC, valid values are IDC and LASTMILE. IDC indicates detection points deployed in data centers. LASTMILE indicates detection points deployed in end-user homes that use fixed-line networks. The type field is optional and defaults to IDC. When AgentGroup is set to MOBILE, this field does not need to be specified.
   * 
   * For information about how to obtain detection point information, see [DescribeSiteMonitorISPCityList](https://help.aliyun.com/document_detail/115045.html).
   * 
   * > You must specify either `IspCities` or `RandomIspCity`.
   * 
   * @example
   * [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]
   */
  ispCities?: string;
  /**
   * @remarks
   * The advanced extended options for the protocol type of the synthetic monitoring task. Different protocol types correspond to different extended options.
   * 
   * @example
   * {"time_out":5000}
   */
  optionsJson?: string;
  /**
   * @remarks
   * The number of detection points.
   * 
   * > - You must specify either `IspCities` or `RandomIspCity`.- If you set the `RandomIspCity` parameter, the `IspCities` parameter becomes invalid.
   * 
   * @example
   * 1
   */
  randomIspCity?: number;
  regionId?: string;
  /**
   * @remarks
   * The name of the synthetic monitoring task.
   * 
   * <props="china">The name must be 4 to 100 characters in length and can contain letters, digits, underscores (_), and Chinese characters.
   * 
   * 
   * <props="intl">The name must be 4 to 100 characters in length and can contain letters, digits, and underscores (_).
   * 
   * <props="partner">The name must be 4 to 100 characters in length and can contain letters, digits, and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * task1
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the synthetic monitoring task.
   * Valid values: HTTP, PING, TCP, UDP, and DNS.
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

