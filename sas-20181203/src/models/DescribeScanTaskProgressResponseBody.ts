// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScanTaskProgressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * EA15BA8A-D631-4375-8D40-CB7C769B0279
   */
  requestId?: string;
  /**
   * @remarks
   * The progress of the virus scan task. Valid values:
   * 
   * *   **init**: The task is being initialized.
   * *   **Processing**: The task is running.
   * *   **Success**: The task is complete.
   * *   **Failed**: The task fails.
   * 
   * @example
   * Success
   */
  scanTaskProgress?: string;
  /**
   * @remarks
   * The information about the asset on which the virus scan task runs. The value is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that contains the following fields:
   * 
   * *   **type**: the type of the asset on which you want to perform a virus scan task. Valid values:
   * 
   *     *   **groupId**: server group.
   *     *   **uuid**: server.
   * 
   * *   **name**: the name of the server group or server.
   * 
   * *   **target**: the asset on which the virus scan task runs. The value of this field varies based on the value of the type field.
   * 
   *     *   If the **type** field is set to **groupId**, the value of this field is the ID of the server group.
   *     *   If the **type** field is set to **uuid**, the value of this field is the universally unique identifier (UUID) of the server.
   * 
   * @example
   * [{"type":"uuid","name":"host001","target":"503201a7-14c6-4280-801b-1169ed42****"}]
   */
  targetInfo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scanTaskProgress: 'ScanTaskProgress',
      targetInfo: 'TargetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scanTaskProgress: 'string',
      targetInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

