// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusListSynchronizationDirectionInfoList extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the latest data record is synchronized. The value is a UNIX timestamp.
   * 
   * > You can use a search engine to find a UNIX timestamp conversion tool.
   * 
   * @example
   * 1610524452
   */
  checkpoint?: string;
  /**
   * @remarks
   * The synchronization status of the synchronization instance in the specified direction. Valid values:
   * 
   * - **NotStarted**: Not started.
   * - **Prechecking**: Prechecking.
   * - **PrecheckFailed**: Precheck failed.
   * - **Initializing**: Initial synchronization.
   * - **InitializeFailed**: Initial synchronization failed.
   * - **Synchronizing**: Synchronizing.
   * - **Failed**: Failed.
   * - **Suspending**: Suspending.
   * - **Modifying**: Modifying synchronization objects.
   * - **Finished**: Finished.
   * 
   * @example
   * InitializeFailed
   */
  status?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: Forward.
   * - **Reverse**: Reverse.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      status: 'Status',
      synchronizationDirection: 'SynchronizationDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      status: 'string',
      synchronizationDirection: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusList extends $dara.Model {
  /**
   * @remarks
   * The list of synchronization direction details.
   */
  synchronizationDirectionInfoList?: DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusListSynchronizationDirectionInfoList[];
  /**
   * @remarks
   * The instance ID of the data synchronization instance.
   * 
   * @example
   * dtsexjk1alb116****
   */
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      synchronizationDirectionInfoList: 'SynchronizationDirectionInfoList',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synchronizationDirectionInfoList: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusListSynchronizationDirectionInfoList },
      synchronizationJobId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.synchronizationDirectionInfoList)) {
      $dara.Model.validateArray(this.synchronizationDirectionInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of synchronization instances returned on each page.
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
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The list of synchronization job statuses.
   */
  synchronizationJobListStatusList?: DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusList[];
  /**
   * @remarks
   * The total number of queried synchronization instances.
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

