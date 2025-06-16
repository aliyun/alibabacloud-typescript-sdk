// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowLogsResponseBodyFlowLogsFlowLogTrafficPath extends $dara.Model {
  trafficPathList?: string[];
  static names(): { [key: string]: string } {
    return {
      trafficPathList: 'TrafficPathList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficPathList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.trafficPathList)) {
      $dara.Model.validateArray(this.trafficPathList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

