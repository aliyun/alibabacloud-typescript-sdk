// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiCallDetailPageRequest extends $dara.Model {
  /**
   * @example
   * 1212131231****
   */
  batchId?: string;
  /**
   * @example
   * ANSWERED
   */
  callResult?: string;
  /**
   * @example
   * 053714454****
   */
  calledNumber?: string;
  /**
   * @example
   * 1748948749000
   */
  endCallingTime?: number;
  /**
   * @example
   * 1748948749000
   */
  endImportedTime?: number;
  /**
   * @example
   * A
   */
  majorIntent?: string;
  /**
   * @example
   * 20
   */
  maxConversationDuration?: number;
  /**
   * @example
   * 0
   */
  minConversationDuration?: number;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 1748948749000
   */
  startCallingTime?: number;
  /**
   * @example
   * 1748948749000
   */
  startImportedTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1212131231****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      callResult: 'CallResult',
      calledNumber: 'CalledNumber',
      endCallingTime: 'EndCallingTime',
      endImportedTime: 'EndImportedTime',
      majorIntent: 'MajorIntent',
      maxConversationDuration: 'MaxConversationDuration',
      minConversationDuration: 'MinConversationDuration',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startCallingTime: 'StartCallingTime',
      startImportedTime: 'StartImportedTime',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      callResult: 'string',
      calledNumber: 'string',
      endCallingTime: 'number',
      endImportedTime: 'number',
      majorIntent: 'string',
      maxConversationDuration: 'number',
      minConversationDuration: 'number',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startCallingTime: 'number',
      startImportedTime: 'number',
      status: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

