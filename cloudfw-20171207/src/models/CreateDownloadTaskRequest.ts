// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDownloadTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response message.
   * 
   * Valid values:
   * 
   * - **zh**: Chinese (default)
   * 
   * - **en**: English
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
   * The type of the task. For a list of valid values, see the API for querying file download task types.
   * 
   * @example
   * InternetFirewallAsset
   */
  taskType?: string;
  /**
   * @remarks
   * The time zone of the time information in the downloaded file. The value is an IANA time zone identifier. The default value is Asia/Shanghai, which corresponds to UTC+8.
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

