// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceInstanceWorkerRequest extends $dara.Model {
  /**
   * @remarks
   * The sort order.
   * 
   * - Asc: ascending order.
   * 
   * - Desc: descending order.
   * 
   * @example
   * Desc
   */
  order?: string;
  /**
   * @remarks
   * The page number. The value starts from 1. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The default value is 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether the health check passed.
   * 
   * @example
   * true
   */
  ready?: boolean;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * echo
   */
  serviceName?: string;
  /**
   * @remarks
   * The field to sort by.
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  /**
   * @remarks
   * The status of the worker instance.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The name of the worker instance.
   * 
   * @example
   * test-fd95xxxxx-xxxxxx
   */
  workerName?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ready: 'Ready',
      serviceName: 'ServiceName',
      sort: 'Sort',
      status: 'Status',
      workerName: 'WorkerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ready: 'boolean',
      serviceName: 'string',
      sort: 'string',
      status: 'string',
      workerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

