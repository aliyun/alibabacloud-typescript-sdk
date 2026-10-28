// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkAppAttemptLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the retry log.
   * > Call the [ListSparkAppAttempts](https://help.aliyun.com/document_detail/455887.html) operation to query the retry history of an application, which includes the retry log ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s202207151211hz****-0001
   */
  attemptId?: string;
  /**
   * @remarks
   * The number of lines in the retry log. Valid values: 1 to 500. Default value: 300.
   * 
   * @example
   * 20
   */
  logLength?: number;
  /**
   * @remarks
   * The start offset for reading logs.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of data rows per page.
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

