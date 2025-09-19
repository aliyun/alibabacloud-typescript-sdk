// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HandleSecurityEventsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to add multiple alert events to the whitelist at a time. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  markBatch?: string;
  /**
   * @remarks
   * The whitelist rule. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **field**: The field based on which alert events are added to the whitelist.
   * 
   * *   **operate**: The method that is used to added alert events to the whitelist. Valid values:
   * 
   *     *   **notContains**: does not contain
   *     *   **contains**: contains
   *     *   **regex**: matches by regular expression
   *     *   **strEqual**: equals
   *     *   **strNotEqual**: does not equal
   * 
   * *   **fieldValue**: The value of the field based on which alert events are added to the whitelist.
   * 
   * *   **uuid**: The application scope of the whitelist rule. Valid values:
   * 
   *     *   **part**: the current asset
   *     *   **ALL**: all assets
   * 
   * >  You can call the [DescribeSecurityEventOperations](~~DescribeSecurityEventOperations~~) operation to obtain the fields that you can specify for **field**.
   * 
   * @example
   * [{"uuid":"part","field":"gmtModified","operate":"contains","fieldValue":"asd"},{"uuid":"part","field":"loginUser","operate":"contains","fieldValue":"vff"}]
   */
  markMissParam?: string;
  /**
   * @remarks
   * The operation that you want to perform to handle the alert events. Valid values:
   * 
   * *   **block_ip**: blocks the source IP address.
   * *   **advance_mark_mis_info**: adds the alert events to the whitelist.
   * *   **ignore**: ignores the alert events.
   * *   **manual_handled**: marks the alert events as manually handled.
   * *   **kill_process**: terminates the malicious process.
   * *   **cleanup**: performs in-depth virus detection and removal.
   * *   **kill_and_quara**: kills the malicious processes and quarantines the source file.
   * *   **disable_malicious_defense**: stops the container on which the alerting files or processes exist.
   * *   **client_problem_check**: performs troubleshooting.
   * *   **quara**: quarantines the source file of the malicious process.
   * 
   * This parameter is required.
   * 
   * @example
   * block_ip
   */
  operationCode?: string;
  /**
   * @remarks
   * The configuration of the operation that you want to perform to handle the alert events.
   * 
   * >  If you set OperationCode to `kill_and_quara` or `block_ip`, you must specify OperationParams. If you set OperationCode to other values, you can leave OperationParams empty.
   * 
   * @example
   * {}
   */
  operationParams?: string;
  /**
   * @remarks
   * The remarks of the handling operation.
   * 
   * @example
   * remark test.
   */
  remark?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member in the resource directory.
   * 
   * >  You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain the IDs.
   * 
   * @example
   * 16670360956*****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The IDs of the alert events.
   * 
   * This parameter is required.
   * 
   * @example
   * ["909361"]
   */
  securityEventIds?: string[];
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 1.2.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      markBatch: 'MarkBatch',
      markMissParam: 'MarkMissParam',
      operationCode: 'OperationCode',
      operationParams: 'OperationParams',
      remark: 'Remark',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      securityEventIds: 'SecurityEventIds',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markBatch: 'string',
      markMissParam: 'string',
      operationCode: 'string',
      operationParams: 'string',
      remark: 'string',
      resourceDirectoryAccountId: 'number',
      securityEventIds: { 'type': 'array', 'itemType': 'string' },
      sourceIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.securityEventIds)) {
      $dara.Model.validateArray(this.securityEventIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

