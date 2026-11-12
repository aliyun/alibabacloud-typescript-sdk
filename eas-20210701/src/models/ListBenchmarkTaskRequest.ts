// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBenchmarkTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The filter parameter. If specified, the system searches for records that match the specified value in the EAS service name and stress testing task name.
   * 
   * @example
   * test_bench
   */
  filter?: string;
  /**
   * @remarks
   * The model ID.
   * 
   * @example
   * Qwen3.5-27B
   */
  modelId?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - desc: Descending order. This is the default value.
   * - asc: Ascending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number of the stress testing task list. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of stress testing tasks to return on each page. Default value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request method for stress testing. Valid values:
   * - concurrency: Fixed concurrency mode.
   * - requestRate: Fixed request rate mode.
   * - peakThroughput: Peak throughput mode.
   * 
   * @example
   * requestRate
   */
  requestMethod?: string;
  /**
   * @remarks
   * The name of the EAS service that corresponds to the stress testing task. For more information about how to query the service name, see [ListServices](https://help.aliyun.com/document_detail/412109.html).
   * 
   * @example
   * test_bench_srv
   */
  serviceName?: string;
  /**
   * @remarks
   * The sort field.
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  /**
   * @remarks
   * The execution status used to filter stress testing tasks.
   * 
   * @example
   * Creating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      modelId: 'ModelId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestMethod: 'RequestMethod',
      serviceName: 'ServiceName',
      sort: 'Sort',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      modelId: 'string',
      order: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      requestMethod: 'string',
      serviceName: 'string',
      sort: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

