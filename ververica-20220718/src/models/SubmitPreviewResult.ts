// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TableSchema } from "./TableSchema";


export class SubmitPreviewResult extends $dara.Model {
  queryId?: string;
  sessionId?: string;
  tableSchemas?: TableSchema[];
  static names(): { [key: string]: string } {
    return {
      queryId: 'queryId',
      sessionId: 'sessionId',
      tableSchemas: 'tableSchemas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryId: 'string',
      sessionId: 'string',
      tableSchemas: { 'type': 'array', 'itemType': TableSchema },
    };
  }

  validate() {
    if(Array.isArray(this.tableSchemas)) {
      $dara.Model.validateArray(this.tableSchemas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

