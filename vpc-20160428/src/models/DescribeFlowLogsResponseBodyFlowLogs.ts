// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFlowLogsResponseBodyFlowLogsFlowLog } from "./DescribeFlowLogsResponseBodyFlowLogsFlowLog";


export class DescribeFlowLogsResponseBodyFlowLogs extends $dara.Model {
  flowLog?: DescribeFlowLogsResponseBodyFlowLogsFlowLog[];
  static names(): { [key: string]: string } {
    return {
      flowLog: 'FlowLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLog: { 'type': 'array', 'itemType': DescribeFlowLogsResponseBodyFlowLogsFlowLog },
    };
  }

  validate() {
    if(Array.isArray(this.flowLog)) {
      $dara.Model.validateArray(this.flowLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

