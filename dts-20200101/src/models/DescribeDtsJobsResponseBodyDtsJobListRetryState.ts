// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobsResponseBodyDtsJobListRetryState extends $dara.Model {
  /**
   * @remarks
   * The error message returned if these retries failed.
   * 
   * @example
   * Unexpected error
   */
  errMessage?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * bi6e22ay243****
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
   * The error code.
   * 
   * @example
   * dts.retry.err.0046
   */
  migrationErrCode?: string;
  /**
   * @remarks
   * The ID of the error code-related documentation.
   * 
   * @example
   * 462133
   */
  migrationErrHelpDocId?: string;
  /**
   * @remarks
   * The key of the error code-related documentation.
   * 
   * @example
   * DTS-RETRY-ERR-0046
   */
  migrationErrHelpDocKey?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * dts.retry.err.0046.msg
   */
  migrationErrMsg?: string;
  /**
   * @remarks
   * The type of the error code.
   * 
   * @example
   * ForeignKey
   */
  migrationErrType?: string;
  /**
   * @remarks
   * The solution to the error.
   * 
   * @example
   * dts.retry.err.0046.workaround
   */
  migrationErrWorkaround?: string;
  /**
   * @remarks
   * The progress of the instance when DTS retries.
   * 
   * @example
   * 03
   */
  module?: string;
  /**
   * @remarks
   * The number of retries that have been performed.
   * 
   * @example
   * 5
   */
  retryCount?: number;
  /**
   * @remarks
   * The object on which these retries are performed. Valid values:
   * 
   * - **srcDB**: the source database 
   * - **destDB**: the destination database 
   * - **inner_module**: an internal module of DTS
   * 
   * @example
   * srcDB
   */
  retryTarget?: string;
  /**
   * @remarks
   * The time that has elapsed from the time when the first retry starts. Unit: seconds.
   * 
   * @example
   * 3600
   */
  retryTime?: number;
  /**
   * @remarks
   * Indicates whether the task is being retried. Valid values:
   * 
   * - **true**
   * - **false**
   * 
   * @example
   * false
   */
  retrying?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMessage: 'ErrMessage',
      jobId: 'JobId',
      maxRetryTime: 'MaxRetryTime',
      migrationErrCode: 'MigrationErrCode',
      migrationErrHelpDocId: 'MigrationErrHelpDocId',
      migrationErrHelpDocKey: 'MigrationErrHelpDocKey',
      migrationErrMsg: 'MigrationErrMsg',
      migrationErrType: 'MigrationErrType',
      migrationErrWorkaround: 'MigrationErrWorkaround',
      module: 'Module',
      retryCount: 'RetryCount',
      retryTarget: 'RetryTarget',
      retryTime: 'RetryTime',
      retrying: 'Retrying',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMessage: 'string',
      jobId: 'string',
      maxRetryTime: 'number',
      migrationErrCode: 'string',
      migrationErrHelpDocId: 'string',
      migrationErrHelpDocKey: 'string',
      migrationErrMsg: 'string',
      migrationErrType: 'string',
      migrationErrWorkaround: 'string',
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

