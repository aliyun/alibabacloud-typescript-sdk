// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobRetryState extends $dara.Model {
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ
   */
  errMsg?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ta7w132u12h****
   */
  jobId?: string;
  /**
   * @remarks
   * The maximum duration of a retry. Unit: seconds.
   * 
   * @example
   * 7200
   */
  maxRetryTime?: number;
  /**
   * @remarks
   * The progress of the instance when DTS performs retries.
   * 
   * @example
   * 03
   */
  module?: string;
  /**
   * @remarks
   * The number of retries.
   * 
   * @example
   * 5
   */
  retryCount?: number;
  /**
   * @remarks
   * The object on which the retries are performed. Valid values:
   * 
   * *   **srcDB**: the source database.
   * *   **destDB**: the destination database.
   * *   **inner_module**: an internal module of DTS.
   * 
   * @example
   * srcDB
   */
  retryTarget?: string;
  /**
   * @remarks
   * The time that has elapsed from the point in time when the first retry starts. Unit: seconds.
   * 
   * @example
   * 3600
   */
  retryTime?: number;
  /**
   * @remarks
   * Indicates whether the task is being retried. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  retrying?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'ErrMsg',
      jobId: 'JobId',
      maxRetryTime: 'MaxRetryTime',
      module: 'Module',
      retryCount: 'RetryCount',
      retryTarget: 'RetryTarget',
      retryTime: 'RetryTime',
      retrying: 'Retrying',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMsg: 'string',
      jobId: 'string',
      maxRetryTime: 'number',
      module: 'string',
      retryCount: 'number',
      retryTarget: 'string',
      retryTime: 'number',
      retrying: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

