// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeadLockDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data in JSON format:
   * 
   * - accountId: the user ID.
   * 
   * - textId: the deadlock text ID.
   * 
   * - gmtModified: the time when the diagnosis was generated.
   * 
   * - originText: the original deadlock text of LATEST DETECTED DEADLOCK or the original deadlock text in the error log.
   * 
   * - deadlock: the deadlock details:
   * 
   *   - occurTime: the time when the deadlock occurred.
   * 
   *   - originTextId: the deadlock text ID.
   * 
   *   - rollbackTrxId: the ID of the rolled back transaction.
   * 
   *   - transactions:
   * 
   *     - deadlockIdInDB: the deadlock ID in the database.
   * 
   *     - ip: the access IP address.
   * 
   *     - queryId: the query ID.
   * 
   *     - queryType: the query type.
   * 
   *     - relatedTables: the related tables.
   * 
   *     - tableNamesString: the related tables.
   * 
   *     - sqlText: the SQL text.
   * 
   *     - threadId: the thread ID.
   * 
   *     - transactionId: the transaction ID.
   * 
   *     - trxIdInLock: the transaction ID in the deadlock.
   * 
   *     - userName: the database username.
   * 
   *     - waitLockIndexName: the name of the index for which the lock is waiting.
   * 
   *     - waitLockMode: the type of the lock that is waiting.
   * 
   *     - lockWait: the waiting lock.
   * 
   *     - holdLockIndexName: the name of the index for which the lock is held.
   * 
   *     - holdLockMode: the type of the lock that is held.
   * 
   *     - lockHold: the held lock.
   * 
   *   - trxNum: the number of transactions.
   * 
   * - gmtCreate: the time when the diagnosis was created.
   * 
   * - nodeId: the node ID.
   * 
   * - uuid: the instance ID.
   * 
   * @example
   * {
   *     "accountId": "108************",
   *     "textId": "35303d12d52d29ba73bb************",
   *     "gmtModified": 1732712680000,
   *     "originText": "LATEST DETECTED DEADLOCK****",
   *     "deadlock": "{\\"id\\":0,\\"occurTime\\":1732687047000,\\"originTextId\\":\\"35303d12d52d29ba73bb************\\",\\"rollbackTrxId\\":\\"2\\",\\"transactions\\":[{\\"deadlockIdInDB\\":0,\\"ip\\":\\"100.***.***.***\\",\\"lockWait\\":\\"index PRIMARY of table `das`.`students` trx id 15989454 lock_mode X locks rec but not gap waiting\\",\\"queryId\\":\\"386737457\\",\\"queryType\\":\\"updating\\",\\"relatedTables\\":[\\"`das`.`students`\\"],\\"sqlText\\":\\"update students set name=UUID() where id = 2 \\",\\"tableNamesString\\":\\"`das`.`students`\\",\\"threadId\\":\\"9194526\\",\\"transactionId\\":\\"15989454\\",\\"trxIdInLock\\":1,\\"userName\\":\\"das\\",\\"waitLockIndexName\\":\\"PRIMARY \\",\\"waitLockMode\\":\\"X locks rec but not gap waiting\\"},{\\"deadlockIdInDB\\":0,\\"holdLockIndexName\\":\\"PRIMARY \\",\\"holdLockMode\\":\\"X locks rec but not gap\\",\\"ip\\":\\"100.***.***.***\\",\\"lockHold\\":\\"index PRIMARY of table `das`.`students` trx id 15989451 lock_mode X locks rec but not gap\\",\\"lockWait\\":\\"index PRIMARY of table `das`.`students` trx id 15989451 lock_mode X locks rec but not gap waiting\\",\\"queryId\\":\\"386737566\\",\\"queryType\\":\\"updating\\",\\"relatedTables\\":[\\"`das`.`students`\\"],\\"sqlText\\":\\"update students set name=UUID() where id = 3 \\",\\"tableNamesString\\":\\"`das`.`students`\\",\\"threadId\\":\\"9194501\\",\\"transactionId\\":\\"15989451\\",\\"trxIdInLock\\":2,\\"userName\\":\\"das\\",\\"waitLockIndexName\\":\\"PRIMARY \\",\\"waitLockMode\\":\\"X locks rec but not gap waiting\\"}],\\"trxNum\\":2}",
   *     "gmtCreate": 1732712680000,
   *     "nodeId": "pi-8****************",
   *     "uuid": "pc-8v***************"
   * }
   */
  data?: string;
  /**
   * @remarks
   * The response message.
   * 
   * > - When the request is successful, **Successful** is returned.
   * >
   * > - When the request fails, error information (such as error codes) is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 9CB97BC4-6479-55D0-B9D0-EA925AFE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  synchro?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      synchro: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

