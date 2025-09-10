// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceInstanceWorkerRequest extends $dara.Model {
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  ready?: boolean;
  serviceName?: string;
  sort?: string;
  status?: string;
  /**
   * @remarks
   * The worker name.
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

