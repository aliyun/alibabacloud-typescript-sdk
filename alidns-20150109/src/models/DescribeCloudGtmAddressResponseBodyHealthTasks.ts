// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudGtmAddressResponseBodyHealthTasksHealthTask } from "./DescribeCloudGtmAddressResponseBodyHealthTasksHealthTask";


export class DescribeCloudGtmAddressResponseBodyHealthTasks extends $dara.Model {
  healthTask?: DescribeCloudGtmAddressResponseBodyHealthTasksHealthTask[];
  static names(): { [key: string]: string } {
    return {
      healthTask: 'HealthTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthTask: { 'type': 'array', 'itemType': DescribeCloudGtmAddressResponseBodyHealthTasksHealthTask },
    };
  }

  validate() {
    if(Array.isArray(this.healthTask)) {
      $dara.Model.validateArray(this.healthTask);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

