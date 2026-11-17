// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDownloadTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The Settings for the page number of the current page when paging in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * 
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * When paging, specifies the maximum number of entries to display on each page for a paged query. Default value: 10. Settings: The maximum value is 50.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The task type. For valid values, see the API operation for querying file download task types. If you do not specify this parameter, all files are queried by default.
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

