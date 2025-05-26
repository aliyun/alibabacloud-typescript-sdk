// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkAppAttemptLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the log.
   * 
   * > You can call the [ListSparkAppAttempts](https://help.aliyun.com/document_detail/455887.html) operation to query the information about the retry attempts of a Spark application, including the retry log IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * s202207151211hz****-0001
   */
  attemptId?: string;
  /**
   * @remarks
   * The number of log entries to return. Valid values: 1 to 500. Default value: 300.
   * 
   * @example
   * 20
   */
  logLength?: number;
  /**
   * @remarks
   * The log offset.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 500
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      attemptId: 'AttemptId',
      logLength: 'LogLength',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attemptId: 'string',
      logLength: 'number',
      pageNumber: 'number',
      pageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

