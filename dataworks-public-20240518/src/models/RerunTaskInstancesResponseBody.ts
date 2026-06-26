// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SuccessInfoValue } from "./SuccessInfoValue";


export class RerunTaskInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which is used to locate logs and troubleshoot issues.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A1****
   */
  requestId?: string;
  /**
   * @remarks
   * The result information of the batch operation. The structure is a map in which the key is the node instance ID and the value is the result information.
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

