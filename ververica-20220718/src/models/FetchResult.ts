// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TableResult } from "./TableResult";


export class FetchResult extends $dara.Model {
  resultMessage?: string;
  resultType?: string;
  tableResults?: TableResult[];
  static names(): { [key: string]: string } {
    return {
      resultMessage: 'resultMessage',
      resultType: 'resultType',
      tableResults: 'tableResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultMessage: 'string',
      resultType: 'string',
      tableResults: { 'type': 'array', 'itemType': TableResult },
    };
  }

  validate() {
    if(Array.isArray(this.tableResults)) {
      $dara.Model.validateArray(this.tableResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

