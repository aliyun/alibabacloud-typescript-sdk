// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisInspectionReportStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2024-07-18 15:13:07
   */
  endTime?: string;
  /**
   * @remarks
   * The type of inspection plan used for the task.
   * 
   * @example
   * basic
   */
  inspectionProject?: string;
  /**
   * @remarks
   * The ID of the inspection report.
   * 
   * @example
   * nir-2ca527b8de114ba4afb9
   */
  inspectionReportId?: string;
  /**
   * @remarks
   * The ID of the inspection task.
   * 
   * @example
   * ni-8svmpe0yso****r7fh79
   */
  inspectionTaskId?: string;
  /**
   * @remarks
   * The name of the inspection task.
   * 
   * @example
   * Default
   */
  inspectionTaskName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2024-07-18 15:12:28
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the inspection report.
   * 
   * @example
   * Finish
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      inspectionProject: 'InspectionProject',
      inspectionReportId: 'InspectionReportId',
      inspectionTaskId: 'InspectionTaskId',
      inspectionTaskName: 'InspectionTaskName',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      inspectionProject: 'string',
      inspectionReportId: 'string',
      inspectionTaskId: 'string',
      inspectionTaskName: 'string',
      requestId: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

