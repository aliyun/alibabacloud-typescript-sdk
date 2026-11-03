// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDownloadTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which messages are received. Valid values:
   * 
   * - **zh**: Chinese. This is the default value.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The query conditions for the download task. This parameter is required. If you do not specify this parameter, the API returns error code -340408 (download task TaskData invalid).
   * 
   * @example
   * {\\"SearchItem\\":\\"\\",\\"UserType\\":\\"buy\\",\\"IpVersion\\":\\"4\\"}
   */
  taskData?: string;
  /**
   * @remarks
   * The task type. For valid values, refer to the API operation that queries file download task types.
   * 
   * @example
   * InternetFirewallAsset
   */
  taskType?: string;
  /**
   * @remarks
   * The time zone of the time information in the downloaded file, specified by using an IANA time zone identity. The default value is UTC+8, which is Asia/Shanghai.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      taskData: 'TaskData',
      taskType: 'TaskType',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      taskData: 'string',
      taskType: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

