// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarTaskAndActionsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is 20. If you do not specify this parameter, 10 entries are returned.
   * 
   * > Specify a value for this parameter.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The trigger type of the task. Valid values:
   * 
   * - **stream**: The task is triggered by a data stream.
   * 
   * - **debug**: The task is triggered by a debugging process.
   * 
   * - **manual**: The task is triggered manually.
   * 
   * - **timer**: The task is triggered by a timer.
   * 
   * - **SubInvoke**: The task is triggered by a child flow.
   * 
   * @example
   * debug
   */
  queryType?: string;
  /**
   * @remarks
   * The input parameter of the playbook.
   * 
   * @example
   * input
   */
  queryValue?: string;
  /**
   * @remarks
   * The UUID of the playbook task.
   * 
   * @example
   * 1077f2f9-25e8-42d9-bfdf-1528e1313f6d
   */
  requestUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      queryValue: 'QueryValue',
      requestUuid: 'RequestUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryType: 'string',
      queryValue: 'string',
      requestUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

