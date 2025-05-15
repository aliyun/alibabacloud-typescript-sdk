// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInterveneImportTasksResponseBodyDataStatusList } from "./ListInterveneImportTasksResponseBodyDataStatusList";


export class ListInterveneImportTasksResponseBodyData extends $dara.Model {
  code?: number;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  statusList?: ListInterveneImportTasksResponseBodyDataStatusList[];
  /**
   * @example
   * 0
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      statusList: 'StatusList',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      statusList: { 'type': 'array', 'itemType': ListInterveneImportTasksResponseBodyDataStatusList },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

