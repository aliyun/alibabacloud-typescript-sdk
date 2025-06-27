// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisInspectionReportStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 2024-07-18 15:13:07
   */
  endTime?: string;
  /**
   * @example
   * basic
   */
  inspectionProject?: string;
  /**
   * @example
   * nir-2ca527b8de114ba4afb9
   */
  inspectionReportId?: string;
  /**
   * @example
   * ni-8svmpe0yso****r7fh79
   */
  inspectionTaskId?: string;
  inspectionTaskName?: string;
  /**
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  /**
   * @example
   * 2024-07-18 15:12:28
   */
  startTime?: string;
  /**
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

