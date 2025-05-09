// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDownloadTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the response.
   * 
   * Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The query condition of the download task.
   * 
   * @example
   * {\\"SearchItem\\":\\"\\",\\"UserType\\":\\"buy\\",\\"IpVersion\\":\\"4\\"}
   */
  taskData?: string;
  /**
   * @remarks
   * The type of the task. For more information about task types, see the descriptions in the "DescribeDownloadTaskType" topic.
   * 
   * @example
   * InternetFirewallAsset
   */
  taskType?: string;
  /**
   * @remarks
   * The time zone of the time information in the downloaded file. The value must be an identifier of a time zone in the Internet Assigned Numbers Authority (IANA) database. The default value is Asia/Shanghai, which indicates UTC+8.
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

