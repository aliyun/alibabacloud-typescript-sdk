// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDialogAnalysisResponseBodyDataDialogAnalysisRespListAnalysisRespDialogLabels extends $dara.Model {
  /**
   * @remarks
   * The label name.
   * 
   * @example
   * 二级标签
   */
  name?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 协商还款
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

export class RunDialogAnalysisResponseBodyDataDialogAnalysisRespListAnalysisResp extends $dara.Model {
  /**
   * @remarks
   * The session execution plan.
   * 
   * @example
   * 1. 核实客户账户信息，确认还款情况。\\\\n2. 若未收到还款，联系财务部门确认是否到账延迟。\\\\n3. 若已还款，更新客户记录并致歉。\\\\n4. 跟进客户，确保问题解决。
   */
  dialogExecPlan?: string;
  /**
   * @remarks
   * The list of session labels.
   */
  dialogLabels?: RunDialogAnalysisResponseBodyDataDialogAnalysisRespListAnalysisRespDialogLabels[];
  /**
   * @remarks
   * The session open analysis.
   */
  dialogOpenAnalysis?: { [key: string]: any };
  /**
   * @remarks
   * The session process analysis.
   */
  dialogProcessAnalysis?: { [key: string]: any };
  /**
   * @remarks
   * The session SOP.
   * 
   * @example
   * 营销
   */
  dialogSop?: string;
  /**
   * @remarks
   * The session summary.
   * 
   * @example
   * - 是否有资金需求：否\\\\n- 是否有意向：否，客户认为自己已经解决，对当前状态表示不解\\\\n- 是否可营销：否，对话中未表现出对营销信息的兴趣或接受度\\\\n- 待满足需求：客户希望在三天内解决问题
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
      dialogLabels: { 'type': 'array', 'itemType': RunDialogAnalysisResponseBodyDataDialogAnalysisRespListAnalysisRespDialogLabels },
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

export class RunDialogAnalysisResponseBodyDataDialogAnalysisRespList extends $dara.Model {
  /**
   * @remarks
   * The result of the session analysis.
   */
  analysisResp?: RunDialogAnalysisResponseBodyDataDialogAnalysisRespListAnalysisResp;
  /**
   * @remarks
   * The list of failed nodes.
   */
  failNode?: string[];
  /**
   * @remarks
   * The time when the session was created.
   * 
   * @example
   * 2024-04-24 11:54:34
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 1759457905S001vejpvd6vej
   */
  sessionId?: string;
  /**
   * @remarks
   * The execution status of the session analysis task.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      analysisResp: 'analysisResp',
      failNode: 'failNode',
      gmtCreate: 'gmtCreate',
      sessionId: 'sessionId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisResp: RunDialogAnalysisResponseBodyDataDialogAnalysisRespListAnalysisResp,
      failNode: { 'type': 'array', 'itemType': 'string' },
      gmtCreate: 'string',
      sessionId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.analysisResp && typeof (this.analysisResp as any).validate === 'function') {
      (this.analysisResp as any).validate();
    }
    if(Array.isArray(this.failNode)) {
      $dara.Model.validateArray(this.failNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDialogAnalysisResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of session analysis results.
   */
  dialogAnalysisRespList?: RunDialogAnalysisResponseBodyDataDialogAnalysisRespList[];
  static names(): { [key: string]: string } {
    return {
      dialogAnalysisRespList: 'dialogAnalysisRespList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogAnalysisRespList: { 'type': 'array', 'itemType': RunDialogAnalysisResponseBodyDataDialogAnalysisRespList },
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

export class RunDialogAnalysisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time consumed, in milliseconds.
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * The response data.
   */
  data?: RunDialogAnalysisResponseBodyData;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 02CD4454-3F2C-57D0-9060-68DEAA1F6993
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The timestamp.
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
      data: RunDialogAnalysisResponseBodyData,
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

