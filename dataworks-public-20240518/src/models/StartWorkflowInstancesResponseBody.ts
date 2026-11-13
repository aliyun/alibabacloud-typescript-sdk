// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SuccessInfoValue } from "./SuccessInfoValue";


export class StartWorkflowInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. You can use this ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17****
   */
  requestId?: string;
  /**
   * @remarks
   * The results of the batch operation. The data structure is a map where the key is the workflow instance ID and the value is the result information.
   * 
   * @example
   * {"10001": {"Success": false, "Message": "The instance does not exist."}}
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

