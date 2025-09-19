// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HandleSimilarSecurityEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The whitelist rule. For example, if you want to add a file that contains the string a to the whitelist based on the MD5 hash value, set this parameter to {"field":"md5","operate":"contains","fieldValue":"aa"}.
   * 
   * @example
   * {"field":"md5","operate":"contains","fieldValue":"aa"}
   */
  markMissParam?: string;
  /**
   * @remarks
   * The operation that you want to perform to handle the alert events.
   * 
   * >  You can call the [DescribeSecurityEventOperations](~~DescribeSecurityEventOperations~~) operation to query the operations.
   * 
   * This parameter is required.
   * 
   * @example
   * offline_handled
   */
  operationCode?: string;
  /**
   * @remarks
   * The configuration of the operation that you want to perform to handle the alert events. The value of this parameter is in the JSON format.
   * 
   * >  If you set **OperationCode** to **kill_and_quara**, **block_ip**, or **virus_quara**, you must specify OperationParams. If you set **OperationCode** to other values, you can leave OperationParams empty. If you set **OperationCode** to **block_ip**, the value of OperationParams must consist of the following fields:
   * 
   * > *   **expireTime**: the end time of locking. Unit: milliseconds.
   * 
   * >  If you set **OperationCode** to **kill_and_quara**, the value of OperationParams must consist of the following fields:
   * 
   * > *   **subOperation**: the method of detection and removal. Valid values:
   * 
   * >     *   **killAndQuaraFileByMd5andPath**: terminates the process and quarantines the source file of the process.
   * >     *   **killByMd5andPath**: terminates the running process.
   * 
   * >  If you set **OperationCode** to **virus_quara**, the value of OperationParams consists of the following fields:
   * 
   * > *   **subOperation**: the method of detection and removal. Valid values:
   * 
   * >     *   **quaraFileByMd5andPath**: quarantines the source file of the process.
   * 
   * @example
   * {"expireTime":1646208726195}
   */
  operationParams?: string;
  /**
   * @remarks
   * The remark of the operation.
   * 
   * @example
   * remark test.
   */
  remark?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ID of the task that handles the alert events at a time.
   * 
   * >  You can call the [CreateSimilarSecurityEventsQueryTask](~~CreateSimilarSecurityEventsQueryTask~~) operation to query the IDs of tasks.
   * 
   * This parameter is required.
   * 
   * @example
   * 666038
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      markMissParam: 'MarkMissParam',
      operationCode: 'OperationCode',
      operationParams: 'OperationParams',
      remark: 'Remark',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markMissParam: 'string',
      operationCode: 'string',
      operationParams: 'string',
      remark: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

