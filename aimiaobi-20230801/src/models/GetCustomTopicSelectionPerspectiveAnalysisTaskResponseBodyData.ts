// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResult } from "./GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResult";


export class GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyData extends $dara.Model {
  customViewPointsResult?: GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResult;
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @example
   * FAILED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      customViewPointsResult: 'CustomViewPointsResult',
      errorMessage: 'ErrorMessage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customViewPointsResult: GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResult,
      errorMessage: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.customViewPointsResult && typeof (this.customViewPointsResult as any).validate === 'function') {
      (this.customViewPointsResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

