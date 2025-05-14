// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespListAnalysisRespDialogLabels } from "./GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespListAnalysisRespDialogLabels";


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

