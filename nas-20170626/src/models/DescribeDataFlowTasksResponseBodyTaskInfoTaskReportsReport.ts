// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataFlowTasksResponseBodyTaskInfoTaskReportsReport extends $dara.Model {
  /**
   * @remarks
   * The name of the report.
   * 
   * *   CPFS:
   * 
   *     TotalFilesReport: task reports.
   * 
   * *   CPFS for LINGJUN:
   * 
   *     *   FailedFilesReport: failed file reports.
   *     *   SkippedFilesReport: skipped file reports.
   *     *   SuccessFilesReport: successful file reports.
   * 
   * @example
   * TotalFilesReport
   */
  name?: string;
  /**
   * @remarks
   * The report URL.
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

