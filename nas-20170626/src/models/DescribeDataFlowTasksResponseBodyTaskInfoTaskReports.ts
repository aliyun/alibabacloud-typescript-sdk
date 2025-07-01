// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataFlowTasksResponseBodyTaskInfoTaskReportsReport } from "./DescribeDataFlowTasksResponseBodyTaskInfoTaskReportsReport";


export class DescribeDataFlowTasksResponseBodyTaskInfoTaskReports extends $dara.Model {
  report?: DescribeDataFlowTasksResponseBodyTaskInfoTaskReportsReport[];
  static names(): { [key: string]: string } {
    return {
      report: 'Report',
    };
  }

  static types(): { [key: string]: any } {
    return {
      report: { 'type': 'array', 'itemType': DescribeDataFlowTasksResponseBodyTaskInfoTaskReportsReport },
    };
  }

  validate() {
    if(Array.isArray(this.report)) {
      $dara.Model.validateArray(this.report);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

