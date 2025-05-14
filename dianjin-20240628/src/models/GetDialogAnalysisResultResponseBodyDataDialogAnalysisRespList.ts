// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespListAnalysisResp } from "./GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespListAnalysisResp";


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

