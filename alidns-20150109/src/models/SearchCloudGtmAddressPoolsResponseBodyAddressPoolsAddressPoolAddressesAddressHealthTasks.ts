// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressHealthTasksHealthTask } from "./SearchCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressHealthTasksHealthTask";


export class SearchCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressHealthTasks extends $dara.Model {
  healthTask?: SearchCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressHealthTasksHealthTask[];
  static names(): { [key: string]: string } {
    return {
      healthTask: 'HealthTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthTask: { 'type': 'array', 'itemType': SearchCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressHealthTasksHealthTask },
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

