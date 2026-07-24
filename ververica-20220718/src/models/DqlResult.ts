// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitPreviewResult } from "./SubmitPreviewResult";
import { TableResult } from "./TableResult";


export class DqlResult extends $dara.Model {
  statementIndex?: number;
  submitPreviewResult?: SubmitPreviewResult;
  tableResults?: TableResult[];
  static names(): { [key: string]: string } {
    return {
      statementIndex: 'statementIndex',
      submitPreviewResult: 'submitPreviewResult',
      tableResults: 'tableResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statementIndex: 'number',
      submitPreviewResult: SubmitPreviewResult,
      tableResults: { 'type': 'array', 'itemType': TableResult },
    };
  }

  validate() {
    if(this.submitPreviewResult && typeof (this.submitPreviewResult as any).validate === 'function') {
      (this.submitPreviewResult as any).validate();
    }
    if(Array.isArray(this.tableResults)) {
      $dara.Model.validateArray(this.tableResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

