// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespListAnalysisRespDialogLabels extends $dara.Model {
  /**
   * @remarks
   * Label name
   * 
   * @example
   * 额度不足
   */
  name?: string;
  /**
   * @remarks
   * Label value
   * 
   * @example
   * 0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespListAnalysisResp extends $dara.Model {
  /**
   * @remarks
   * Session execution plan
   * 
   * @example
   * 1. 客服应再次确认客户的疑问是否已解决，特别是关于额度的具体数额。\\n2. 如果客户仍有疑问，提供客服热线电话，建议客户直接拨打以获取更详细的帮助。\\n3. 提醒客户检查短信中的链接，以便快速查看和操作。\\n4. 记录此次通话中客户表现出的任何不适或不便，确保后续跟进时更加体贴。\\n5. 发送一条包含操作指南的短信，确保客户能够轻松找到并使用服务。\\n6. 结束通话前，再次感谢客户的支持，并表达希望客户早日康复的愿望。
   */
  dialogExecPlan?: string;
  /**
   * @remarks
   * List of session labels
   */
  dialogLabels?: GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespListAnalysisRespDialogLabels[];
  /**
   * @remarks
   * Session open analysis
   * 
   * @example
   * {
   *     "dialogues": [
   *         {
   *             "round": 1,
   *             "result": [
   *                 {
   *                     "key": "对话主题",
   *                     "value": "XX"
   *                 },
   *                 {
   *                     "key": "客户反应",
   *                     "value": "XXX"
   *                 },
   *                 {
   *                     "key": "客户反应分析",
   *                     "value": "XXX"
   *                 },
   *                 {
   *                     "key": "客服话术",
   *                     "value": "XXX"
   *                 },
   *                 {
   *                     "key": "本轮客服话术修改建议",
   *                     "value": "XXX"
   *                 }
   *             ]
   *         },
   *         {
   *             "round": 2,
   *             "result": [
   *                 {
   *                     "key": "对话主题",
   *                     "value": "XX"
   *                 },
   *                 {
   *                     "key": "客户反应",
   *                     "value": "XXX"
   *                 },
   *                 {
   *                     "key": "客户反应分析",
   *                     "value": "XXX"
   *                 },
   *                 {
   *                     "key": "客服话术",
   *                     "value": "XXX"
   *                 },
   *                 {
   *                     "key": "本轮客服话术修改建议",
   *                     "value": "XXX"
   *                 }
   *             ]
   *         }
   *     ],
   *   "dialogOpenAnalysisStr":"第一轮对话：对话主题-xx##客户反应-xx##客户反应分析-xx##客服话术-xx##本轮客服话术修改建议-xx
   * 第二轮对话：对话主题-xx##客户反应-xx##客户反应分析-xx##客服话术-xx##本轮客服话术修改建议-xx"
   * }
   */
  dialogOpenAnalysis?: { [key: string]: any };
  /**
   * @remarks
   * Session process analysis
   * 
   * @example
   * {
   *     "dialogues": [
   *         {
   *             "round": 1,
   *             "result": [
   *                 {
   *                     "key": "客服",
   *                     "value": "客服回应标签"
   *                 },
   *                 {
   *                     "key": "客户",
   *                     "value": "客户回应态度标签"
   *                 }
   *             ]
   *         },
   *         {
   *             "round": 2,
   *             "result": [
   *                 {
   *                     "key": "客服",
   *                     "value": "客服回应标签"
   *                 },
   *                 {
   *                     "key": "客户",
   *                     "value": "客户回应态度标签"
   *                 }
   *             ]
   *         }
   *     ],
   * "dialogProcessAnalysisStr":"第一轮对话：客服-客服回应标签，客户-客户回应态度标签
   * 第二轮对话：客服-客服回应标签，客户-客户回应态度标签"
   * }
   */
  dialogProcessAnalysis?: { [key: string]: any };
  /**
   * @remarks
   * Session SOP
   * 
   * @example
   * 产品介绍
   */
  dialogSop?: string;
  /**
   * @remarks
   * Session summary
   * 
   * @example
   * - 是否有资金需求：不确定，客户未明确表示有无资金需求。\\n- 是否有意向：不确定，客户未明确表达意向。\\n- 是否可营销：不可营销，客户对客服的多次询问未表现出兴趣，且对话中提到因不适希望减少联系。\\n- 待满足需求：客户希望了解具体的预审额度信息。
   */
  dialogSummary?: string;
  static names(): { [key: string]: string } {
    return {
      dialogExecPlan: 'dialogExecPlan',
      dialogLabels: 'dialogLabels',
      dialogOpenAnalysis: 'dialogOpenAnalysis',
      dialogProcessAnalysis: 'dialogProcessAnalysis',
      dialogSop: 'dialogSop',
      dialogSummary: 'dialogSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogExecPlan: 'string',
      dialogLabels: { 'type': 'array', 'itemType': GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespListAnalysisRespDialogLabels },
      dialogOpenAnalysis: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dialogProcessAnalysis: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dialogSop: 'string',
      dialogSummary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dialogLabels)) {
      $dara.Model.validateArray(this.dialogLabels);
    }
    if(this.dialogOpenAnalysis) {
      $dara.Model.validateMap(this.dialogOpenAnalysis);
    }
    if(this.dialogProcessAnalysis) {
      $dara.Model.validateMap(this.dialogProcessAnalysis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespList extends $dara.Model {
  /**
   * @remarks
   * Session analysis result
   */
  analysisResp?: GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespListAnalysisResp;
  /**
   * @remarks
   * Session creation time
   * 
   * @example
   * 2024-04-24 11:54:34
   */
  gmtCreate?: string;
  /**
   * @remarks
   * OSS URL for the session analysis result. The URL expires in one hour.
   * 
   * @example
   * https://xxx.oss-cn-beijing.aliyuncs.com/dialog-analysis/2024-12-30/2/1826661605606129665
   */
  ossUrl?: string;
  /**
   * @remarks
   * Session ID
   * 
   * @example
   * 183764873624
   */
  sessionId?: string;
  /**
   * @remarks
   * Task execution status for session analysis.
   * 
   * - init means the task has not started
   * 
   * - pending means the task is queued
   * 
   * - running means the task is in progress
   * 
   * - error means the task failed
   * 
   * - success means the task completed successfully
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      analysisResp: 'analysisResp',
      gmtCreate: 'gmtCreate',
      ossUrl: 'ossUrl',
      sessionId: 'sessionId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisResp: GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespListAnalysisResp,
      gmtCreate: 'string',
      ossUrl: 'string',
      sessionId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.analysisResp && typeof (this.analysisResp as any).validate === 'function') {
      (this.analysisResp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDialogAnalysisResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of session analysis results
   */
  dialogAnalysisRespList?: GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespList[];
  static names(): { [key: string]: string } {
    return {
      dialogAnalysisRespList: 'dialogAnalysisRespList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogAnalysisRespList: { 'type': 'array', 'itemType': GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespList },
    };
  }

  validate() {
    if(Array.isArray(this.dialogAnalysisRespList)) {
      $dara.Model.validateArray(this.dialogAnalysisRespList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDialogAnalysisResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Processing time in milliseconds
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * Response data
   */
  data?: GetDialogAnalysisResultResponseBodyData;
  /**
   * @remarks
   * Data type
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 88A006F0-B565-53BA-B38A-DBDF9D0B2935
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Timestamp
   * 
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetDialogAnalysisResultResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

