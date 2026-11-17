// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertDirectConversationToWorkResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败沿现有 OpenAPI/POP 错误合同返回；转换是否整体完成须同时检查 status
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 转换 ID，查询及恢复过程中保持不变
   * 
   * @example
   * exampleConversionId
   */
  conversionId?: string;
  /**
   * @remarks
   * 固定快照中转换的完整 direct 问答轮数，不受发送接口 directMaxHistoryRounds 限制
   * 
   * @example
   * 2
   */
  convertedRounds?: number;
  /**
   * @remarks
   * 转换历史范围，固定为 direct；不包含普通 work 历史
   * 
   * @example
   * direct
   */
  historyScope?: string;
  /**
   * @remarks
   * 错误描述，成功时为空
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 是否允许继续原转换；false 表示不另起执行，仍允许用同一源 sessionId 查询。重试或继续始终复用同一转换、目标及快照
   * 
   * @example
   * false
   */
  retryable?: boolean;
  /**
   * @remarks
   * 冻结快照对应的源 direct 历史 epoch
   * 
   * @example
   * 0
   */
  sourceEpoch?: number;
  /**
   * @remarks
   * 源会话 ID，与请求 sessionId 一致
   * 
   * @example
   * exampleSourceSessionId
   */
  sourceSessionId?: string;
  /**
   * @remarks
   * 转换状态：processing 表示处理中；succeeded 表示模型导入、目标登记、展示投影及两侧就绪均完成。失败按 OpenAPI/POP 错误合同处理，不能仅凭 HTTP 200 判断转换成功
   * 
   * @example
   * succeeded
   */
  status?: string;
  /**
   * @remarks
   * 新的 work 目标会话 ID，与源 ID 不同；processing 时可能返回预分配 ID，仅 succeeded 后可使用；重复查询或恢复复用原目标
   * 
   * @example
   * exampleTargetSessionId
   */
  targetSessionId?: string;
  /**
   * @remarks
   * 冻结快照包含的最后一个 direct 轮次序号；源会话后续轮次不自动加入目标
   * 
   * @example
   * 2
   */
  throughSequence?: number;
  /**
   * @remarks
   * 目标会话的工作模式，固定为 work
   * 
   * @example
   * work
   */
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      conversionId: 'conversionId',
      convertedRounds: 'convertedRounds',
      historyScope: 'historyScope',
      message: 'message',
      requestId: 'requestId',
      retryable: 'retryable',
      sourceEpoch: 'sourceEpoch',
      sourceSessionId: 'sourceSessionId',
      status: 'status',
      targetSessionId: 'targetSessionId',
      throughSequence: 'throughSequence',
      workMode: 'workMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      conversionId: 'string',
      convertedRounds: 'number',
      historyScope: 'string',
      message: 'string',
      requestId: 'string',
      retryable: 'boolean',
      sourceEpoch: 'number',
      sourceSessionId: 'string',
      status: 'string',
      targetSessionId: 'string',
      throughSequence: 'number',
      workMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

