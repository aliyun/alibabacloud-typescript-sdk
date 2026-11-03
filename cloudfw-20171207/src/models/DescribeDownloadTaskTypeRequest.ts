// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDownloadTaskTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return in a paged query.
   * Default value: **1**, which indicates the first page.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The language in which messages are received. Valid values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paged query. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The task type.
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

