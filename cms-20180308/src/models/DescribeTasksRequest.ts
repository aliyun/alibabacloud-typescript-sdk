// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTasksRequest extends $dara.Model {
  keyword?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @example
   * 18b0c27f-bab3-441d-a747-9cdcaa8bbac8
   */
  taskId?: string;
  /**
   * @example
   * 1
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      page: 'Page',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
      regionId: 'string',
      taskId: 'string',
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

