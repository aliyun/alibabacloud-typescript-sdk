// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespList } from "./GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespList";


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

