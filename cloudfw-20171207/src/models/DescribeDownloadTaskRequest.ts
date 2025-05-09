// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDownloadTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The type of the task. For more information about task types, see the descriptions in the "DescribeDownloadTaskType" topic. If you do not specify this parameter, all files are queried by default.
   * 
   * @example
   * InternetFirewallAsset
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      lang: 'string',
      pageSize: 'string',
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

