// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDownloadTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the received messages.
   * 
   * Valid values:
   * 
   * - **zh**: (default) Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The query conditions for the download task.
   * 
   * @example
   * {\\"SearchItem\\":\\"\\",\\"UserType\\":\\"buy\\",\\"IpVersion\\":\\"4\\"}
   */
  taskData?: string;
  /**
   * @remarks
   * The task type. For valid values, call the API operation that queries file download task types.
   * 
   * @example
   * InternetFirewallAsset
   */
  taskType?: string;
  /**
   * @remarks
   * The time zone for time information in the downloaded file. The value is an IANA time zone identifier. Default value: Asia/Shanghai (UTC+8).
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

