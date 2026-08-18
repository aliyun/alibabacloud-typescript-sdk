// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCrawlerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the metadata crawler.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The request ID. Used for locating logs and troubleshooting issues.
   * 
   * @example
   * 9252F32F-D855-549E-8898-61CF5A733050
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the run request was accepted. A value of true indicates that the request was accepted, but does not indicate that the collection task is complete.
   */
  runAccepted?: boolean;
  /**
   * @remarks
   * The initial run status after submission. The value is WAITING when the run request is successfully accepted. To query the final status, call ListCrawlerRuns.
   * 
   * @example
   * WAITING
   */
  runStatus?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The associated DataWorks task instance ID. This field may be empty. To query the final run record, call ListCrawlerRuns.
   * 
   * @example
   * 1234
   */
  taskInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
      runAccepted: 'RunAccepted',
      runStatus: 'RunStatus',
      success: 'Success',
      taskInstanceId: 'TaskInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
      runAccepted: 'boolean',
      runStatus: 'string',
      success: 'boolean',
      taskInstanceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

