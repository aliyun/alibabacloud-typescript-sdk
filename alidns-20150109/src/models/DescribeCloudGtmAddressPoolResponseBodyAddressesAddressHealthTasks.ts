// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudGtmAddressPoolResponseBodyAddressesAddressHealthTasksHealthTask } from "./DescribeCloudGtmAddressPoolResponseBodyAddressesAddressHealthTasksHealthTask";


export class DescribeCloudGtmAddressPoolResponseBodyAddressesAddressHealthTasks extends $dara.Model {
  healthTask?: DescribeCloudGtmAddressPoolResponseBodyAddressesAddressHealthTasksHealthTask[];
  static names(): { [key: string]: string } {
    return {
      healthTask: 'HealthTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthTask: { 'type': 'array', 'itemType': DescribeCloudGtmAddressPoolResponseBodyAddressesAddressHealthTasksHealthTask },
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

