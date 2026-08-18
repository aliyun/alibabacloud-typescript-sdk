// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SuccessInfoValue } from "./SuccessInfoValue";


export class BatchUpdateTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. Used for locating logs and troubleshooting issues.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The result information of the batch operation. The structure is a map in which the node ID is the key and the result information is the value.
   */
  successInfo?: { [key: string]: SuccessInfoValue };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      successInfo: 'SuccessInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      successInfo: { 'type': 'map', 'keyType': 'string', 'valueType': SuccessInfoValue },
    };
  }

  validate() {
    if(this.successInfo) {
      $dara.Model.validateMap(this.successInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

