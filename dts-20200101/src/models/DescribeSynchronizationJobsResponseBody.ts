// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSynchronizationJobsResponseBodySynchronizationInstances } from "./DescribeSynchronizationJobsResponseBodySynchronizationInstances";


export class DescribeSynchronizationJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries that can be displayed on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 92E1E99D-5224-4AD3-8C94-23A3516B****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of data synchronization instances and the details of each instance.
   */
  synchronizationInstances?: DescribeSynchronizationJobsResponseBodySynchronizationInstances[];
  /**
   * @remarks
   * The total number of data synchronization instances that belong to your Alibaba Cloud account.
   * 
   * @example
   * 100
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      synchronizationInstances: 'SynchronizationInstances',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      synchronizationInstances: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstances },
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.synchronizationInstances)) {
      $dara.Model.validateArray(this.synchronizationInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

