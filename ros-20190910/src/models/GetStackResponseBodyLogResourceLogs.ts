// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStackResponseBodyLogResourceLogsLogs } from "./GetStackResponseBodyLogResourceLogsLogs";


export class GetStackResponseBodyLogResourceLogs extends $dara.Model {
  /**
   * @remarks
   * All the logs that are associated with the resources.
   */
  logs?: GetStackResponseBodyLogResourceLogsLogs[];
  /**
   * @remarks
   * The name of the resource that is defined in the template.
   * 
   * @example
   * MyResourceCleaner
   */
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': GetStackResponseBodyLogResourceLogsLogs },
      resourceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

