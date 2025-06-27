// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCloudGtmAlertLogsResponseBodyLogsLog } from "./ListCloudGtmAlertLogsResponseBodyLogsLog";


export class ListCloudGtmAlertLogsResponseBodyLogs extends $dara.Model {
  log?: ListCloudGtmAlertLogsResponseBodyLogsLog[];
  static names(): { [key: string]: string } {
    return {
      log: 'Log',
    };
  }

  static types(): { [key: string]: any } {
    return {
      log: { 'type': 'array', 'itemType': ListCloudGtmAlertLogsResponseBodyLogsLog },
    };
  }

  validate() {
    if(Array.isArray(this.log)) {
      $dara.Model.validateArray(this.log);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

