// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiCallDetailPageResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 12121211111*****
   */
  batchId?: string;
  /**
   * @example
   * 示例值
   */
  callResult?: string;
  /**
   * @example
   * 0537101****
   */
  calledNumber?: string;
  /**
   * @example
   * 1748948749000
   */
  callingTime?: number;
  /**
   * @example
   * 100
   */
  conversationDuration?: number;
  /**
   * @example
   * 示例值示例值
   */
  conversationRecord?: string;
  /**
   * @example
   * 10
   */
  conversationTurnCount?: number;
  /**
   * @example
   * 12121211111*****
   */
  detailId?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  failedReason?: string;
  /**
   * @example
   * 1748948749000
   */
  importedTime?: number;
  /**
   * @example
   * A
   */
  majorIntent?: string;
  /**
   * @example
   * 示例值
   */
  options?: string;
  /**
   * @example
   * https://*******
   */
  recordingFilePath?: string;
  /**
   * @example
   * 12121211111*****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      callResult: 'CallResult',
      calledNumber: 'CalledNumber',
      callingTime: 'CallingTime',
      conversationDuration: 'ConversationDuration',
      conversationRecord: 'ConversationRecord',
      conversationTurnCount: 'ConversationTurnCount',
      detailId: 'DetailId',
      failedReason: 'FailedReason',
      importedTime: 'ImportedTime',
      majorIntent: 'MajorIntent',
      options: 'Options',
      recordingFilePath: 'RecordingFilePath',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      callResult: 'string',
      calledNumber: 'string',
      callingTime: 'number',
      conversationDuration: 'number',
      conversationRecord: 'string',
      conversationTurnCount: 'number',
      detailId: 'string',
      failedReason: 'string',
      importedTime: 'number',
      majorIntent: 'string',
      options: 'string',
      recordingFilePath: 'string',
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

