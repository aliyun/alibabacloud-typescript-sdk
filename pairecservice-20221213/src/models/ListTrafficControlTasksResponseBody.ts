// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTrafficControlTasksResponseBodyTrafficControlTasks } from "./ListTrafficControlTasksResponseBodyTrafficControlTasks";


export class ListTrafficControlTasksResponseBody extends $dara.Model {
  requestId?: string;
  totalCount?: string;
  trafficControlTasks?: ListTrafficControlTasksResponseBodyTrafficControlTasks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trafficControlTasks: 'TrafficControlTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'string',
      trafficControlTasks: { 'type': 'array', 'itemType': ListTrafficControlTasksResponseBodyTrafficControlTasks },
    };
  }

  validate() {
    if(Array.isArray(this.trafficControlTasks)) {
      $dara.Model.validateArray(this.trafficControlTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

