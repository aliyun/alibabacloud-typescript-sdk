// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLiveSnapshotTemplatesResponseBodyTemplateList } from "./ListLiveSnapshotTemplatesResponseBodyTemplateList";


export class ListLiveSnapshotTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The sorting order of the results by creation time.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The list of the templates.
   */
  templateList?: ListLiveSnapshotTemplatesResponseBodyTemplateList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      templateList: 'TemplateList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      sortBy: 'string',
      templateList: { 'type': 'array', 'itemType': ListLiveSnapshotTemplatesResponseBodyTemplateList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.templateList)) {
      $dara.Model.validateArray(this.templateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

