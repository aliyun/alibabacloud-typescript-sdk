// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusList } from "./DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusList";


export class DescribeSynchronizationJobStatusListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
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
   * The number of data synchronization instances displayed on one page.
   * 
   * @example
   * 2
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1413460B-138A-48D1-836C-B24EDDC1****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The status of the data synchronization tasks.
   */
  synchronizationJobListStatusList?: DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusList[];
  /**
   * @remarks
   * The total number of data synchronization instances.
   * 
   * @example
   * 2
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      success: 'Success',
      synchronizationJobListStatusList: 'SynchronizationJobListStatusList',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      success: 'string',
      synchronizationJobListStatusList: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusList },
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.synchronizationJobListStatusList)) {
      $dara.Model.validateArray(this.synchronizationJobListStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

