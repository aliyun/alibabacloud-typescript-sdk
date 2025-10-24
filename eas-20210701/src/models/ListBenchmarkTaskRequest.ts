// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBenchmarkTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword used to query required stress testing tasks. If this parameter is specified, the system returns stress testing tasks based on the names of the stress testing tasks in the matched Elastic Algorithm Service (EAS).
   * 
   * @example
   * test_bench
   */
  filter?: string;
  modelId?: string;
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  requestMethod?: string;
  /**
   * @remarks
   * The name of the EAS service that corresponds to the stress testing task. For more information about how to query the service name, see [ListServices](https://help.aliyun.com/document_detail/412109.html).
   * 
   * @example
   * test_bench_srv
   */
  serviceName?: string;
  sort?: string;
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

