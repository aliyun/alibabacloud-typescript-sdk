// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HandleSimilarSecurityEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The rule for adding to the whitelist. For example, to add a whitelist rule based on file MD5 where the file contains the string "a", set this parameter to {"field":"md5","operate":"contains","fieldValue":"aa"}.
   * 
   * @example
   * {"field":"md5","operate":"contains","fieldValue":"aa"}
   */
  markMissParam?: string;
  /**
   * @remarks
   * The operation type for batch processing similar alert events.
   * >Call the [DescribeSecurityEventOperations](~~DescribeSecurityEventOperations~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * offline_handled
   */
  operationCode?: string;
  /**
   * @remarks
   * The configuration of the sub-operation for alerting event handling. The value is in JSON format.
   * 
   * > This parameter is required when **OperationCode** is set to **kill_and_quara**, **block_ip**, or **virus_quara**. For other values of **OperationCode**, this parameter can be left empty.
   * 
   * > When **OperationCode** is set to **block_ip**, the following field is included:
   * > - **expireTime**: the lock expiration time. Unit: milliseconds.
   * >
   * > When **OperationCode** is set to **kill_and_quara**, the following field is included:
   * > - **subOperation**: the scan method. Valid values:
   * >     - **killAndQuaraFileByMd5andPath**: terminates the process and quarantines the quarantined file.
   * >     - **killByMd5andPath**: terminates the running process.
   * >
   * > When **OperationCode** is set to **virus_quara**, the following field is included:
   * > - **subOperation**: the scan method. Valid values:
   * >    - **quaraFileByMd5andPath**: quarantines the source file of the process.
   * 
   * @example
   * {"expireTime":1646208726195}
   */
  operationParams?: string;
  /**
   * @remarks
   * The remarks for the operation.
   * 
   * @example
   * remark test.
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account of member accounts in the resource folder.
   * >Invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   */
  resourceDirectoryAccountId?: number;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ID of the task that batch processes all alert events of the same type.
   * >Call the [CreateSimilarSecurityEventsQueryTask](~~CreateSimilarSecurityEventsQueryTask~~) operation to obtain this parameter.
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
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
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
      resourceDirectoryAccountId: 'number',
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

