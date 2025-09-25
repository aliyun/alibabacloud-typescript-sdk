// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespListAnalysisRespDialogLabels extends $dara.Model {
  name?: string;
  /**
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
  dialogExecPlan?: string;
  dialogLabels?: GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespListAnalysisRespDialogLabels[];
  dialogOpenAnalysis?: { [key: string]: any };
  dialogProcessAnalysis?: { [key: string]: any };
  dialogSop?: string;
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
  analysisResp?: GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespListAnalysisResp;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  gmtCreate?: string;
  /**
   * @example
   * https://xxx.oss-cn-beijing.aliyuncs.com/dialog-analysis/2024-12-30/2/1826661605606129665
   */
  ossUrl?: string;
  /**
   * @example
   * 183764873624
   */
  sessionId?: string;
  /**
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
   * @example
   * null
   */
  cost?: number;
  data?: GetDialogAnalysisResultResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 88A006F0-B565-53BA-B38A-DBDF9D0B2935
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

