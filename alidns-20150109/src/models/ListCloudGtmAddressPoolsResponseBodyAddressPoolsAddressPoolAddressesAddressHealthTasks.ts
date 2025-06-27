// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressHealthTasksHealthTask } from "./ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressHealthTasksHealthTask";


export class ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressHealthTasks extends $dara.Model {
  healthTask?: ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressHealthTasksHealthTask[];
  static names(): { [key: string]: string } {
    return {
      healthTask: 'HealthTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthTask: { 'type': 'array', 'itemType': ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressHealthTasksHealthTask },
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

