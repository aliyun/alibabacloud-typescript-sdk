// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRunningAppsResponseBodyRunningCloudApps } from "./ListRunningAppsResponseBodyRunningCloudApps";


export class ListRunningAppsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2DC3521C-3820-5EA5-9A9A-00BB7AF4E8E5
   */
  requestId?: string;
  runningCloudApps?: ListRunningAppsResponseBodyRunningCloudApps[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      runningCloudApps: 'RunningCloudApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      runningCloudApps: { 'type': 'array', 'itemType': ListRunningAppsResponseBodyRunningCloudApps },
    };
  }

  validate() {
    if(Array.isArray(this.runningCloudApps)) {
      $dara.Model.validateArray(this.runningCloudApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

