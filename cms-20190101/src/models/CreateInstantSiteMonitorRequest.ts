// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstantSiteMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The URL or IP address of the detection task.
   * 
   * This parameter is required.
   * 
   * @example
   * http://www.aliyun.com
   */
  address?: string;
  /**
   * @remarks
   * The type of the detection points. Valid values: PC and MOBILE. PC indicates detection points on PCs. MOBILE indicates detection points on mobile devices. Default value: PC.
   * 
   * @example
   * PC
   */
  agentGroup?: string;
  /**
   * @remarks
   * The detection points. If you do not specify this parameter, the system randomly selects three detection points.
   * 
   * The value must be a JSON array. Example: `[{"city":"546","isp":"465", "type":"IDC"},{"city":"572","isp":"465", "type":"LASTMILE"},{"city":"738","isp":"465"}]`. These values correspond to Beijing, Hangzhou, and Qingdao.
   * 
   * The type parameter specifies the type of the detection point. If AgentGroup is set to PC, valid values for type are IDC and LASTMILE. IDC indicates that the detection point is deployed in a data center. LASTMILE indicates that the detection point is deployed on the PC of a netizen that is connected to the last mile of an ISP network. The type parameter is optional. The default value is IDC. You do not need to specify this parameter if AgentGroup is set to MOBILE.
   * 
   * For more information about how to obtain detection points, see [DescribeSiteMonitorISPCityList](https://help.aliyun.com/document_detail/115045.html).
   * 
   * > You must specify either `IspCities` or `RandomIspCity`.
   * 
   * @example
   * [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]
   */
  ispCities?: string;
  /**
   * @remarks
   * The extended options for the protocol type of the detection task. The extended options vary based on the protocol type.
   * 
   * @example
   * {"time_out":5000}
   */
  optionsJson?: string;
  /**
   * @remarks
   * The number of detection points.
   * 
   * > - You must specify either `IspCities` or `RandomIspCity`. If you specify `RandomIspCity`, `IspCities` is ignored.
   * 
   * @example
   * 1
   */
  randomIspCity?: number;
  regionId?: string;
  /**
   * @remarks
   * The name of the detection task.
   * 
   * <props="china">
   * 
   * The name must be 4 to 100 characters in length and can contain letters, digits, and underscores (_).
   * 
   * 
   * 
   * <props="intl">
   * 
   * The name must be 4 to 100 characters in length and can contain letters, digits, and underscores (_).
   * 
   * 
   * 
   * <props="partner">
   * 
   * The name must be 4 to 100 characters in length and can contain letters, digits, and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * task1
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the detection task. Valid values: HTTP, PING, TCP, UDP, and DNS.
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

