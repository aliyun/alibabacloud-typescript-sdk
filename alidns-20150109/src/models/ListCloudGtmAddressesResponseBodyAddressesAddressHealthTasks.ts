// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCloudGtmAddressesResponseBodyAddressesAddressHealthTasksHealthTask } from "./ListCloudGtmAddressesResponseBodyAddressesAddressHealthTasksHealthTask";


export class ListCloudGtmAddressesResponseBodyAddressesAddressHealthTasks extends $dara.Model {
  healthTask?: ListCloudGtmAddressesResponseBodyAddressesAddressHealthTasksHealthTask[];
  static names(): { [key: string]: string } {
    return {
      healthTask: 'HealthTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthTask: { 'type': 'array', 'itemType': ListCloudGtmAddressesResponseBodyAddressesAddressHealthTasksHealthTask },
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

