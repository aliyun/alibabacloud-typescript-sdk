// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTask } from "./DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTask";


export class DescribeDataFlowSubTasksResponseBodyDataFlowSubTask extends $dara.Model {
  dataFlowSubTask?: DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTask[];
  static names(): { [key: string]: string } {
    return {
      dataFlowSubTask: 'DataFlowSubTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFlowSubTask: { 'type': 'array', 'itemType': DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTask },
    };
  }

  validate() {
    if(Array.isArray(this.dataFlowSubTask)) {
      $dara.Model.validateArray(this.dataFlowSubTask);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

