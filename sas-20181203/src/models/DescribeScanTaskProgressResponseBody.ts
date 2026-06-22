// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScanTaskProgressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * EA15BA8A-D631-4375-8D40-CB7C769B0279
   */
  requestId?: string;
  /**
   * @remarks
   * The progress of the virus scan task. Valid values:
   * - **init**: The scan task is being initialized.
   * - **Processing**: The scan task is in progress.
   * - **Success**: The scan task is complete.
   * - **Failed**: The scan task failed.
   * 
   * @example
   * Success
   */
  scanTaskProgress?: string;
  /**
   * @remarks
   * The asset information scanned by the virus scan node. This parameter is a string converted from a JSON array in character format. The following fields are included:
   * - **type**: The Asset Type on which the virus scan is executed. Valid values:
   *     - **groupId**: server group.
   *     - **uuid**: server.
   * - **name**: The name of the server group or server.
   * - **target**: The asset on which the virus scan is executed. The following describes the values of this field:
   *     - If **type** is set to **groupId**, this field specifies the server group ID.
   *     - If **type** is set to **uuid**, this field specifies the UUID of the server.
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

