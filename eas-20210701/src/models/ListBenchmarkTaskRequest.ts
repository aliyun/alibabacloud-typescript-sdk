// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBenchmarkTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The filter used to query tasks. If you specify this parameter, the system returns tasks whose names or associated service names match the filter value.
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
   * The name of the Elastic Algorithm Service (EAS) service that corresponds to the stress testing task. For more information about how to query the service name, see [ListServices](https://help.aliyun.com/document_detail/412109.html).
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

