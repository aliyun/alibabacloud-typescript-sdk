// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDocumentAnalyzeTaskStatusResponseBodyResultData } from "./GetDocumentAnalyzeTaskStatusResponseBodyResultData";


export class GetDocumentAnalyzeTaskStatusResponseBodyResult extends $dara.Model {
  data?: GetDocumentAnalyzeTaskStatusResponseBodyResultData;
  error?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      error: 'error',
      status: 'status',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDocumentAnalyzeTaskStatusResponseBodyResultData,
      error: 'string',
      status: 'string',
      taskId: 'string',
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

