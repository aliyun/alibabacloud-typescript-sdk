// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TripTaskQueryResponseBodyModuleRecordTasks } from "./TripTaskQueryResponseBodyModuleRecordTasks";
import { TripTaskQueryResponseBodyModuleRunningTasks } from "./TripTaskQueryResponseBodyModuleRunningTasks";


export class TripTaskQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * true
   */
  needRefresh?: boolean;
  recordTasks?: TripTaskQueryResponseBodyModuleRecordTasks[];
  runningTasks?: TripTaskQueryResponseBodyModuleRunningTasks[];
  static names(): { [key: string]: string } {
    return {
      needRefresh: 'needRefresh',
      recordTasks: 'record_tasks',
      runningTasks: 'running_tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRefresh: 'boolean',
      recordTasks: { 'type': 'array', 'itemType': TripTaskQueryResponseBodyModuleRecordTasks },
      runningTasks: { 'type': 'array', 'itemType': TripTaskQueryResponseBodyModuleRunningTasks },
    };
  }

  validate() {
    if(Array.isArray(this.recordTasks)) {
      $dara.Model.validateArray(this.recordTasks);
    }
    if(Array.isArray(this.runningTasks)) {
      $dara.Model.validateArray(this.runningTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

