// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TableSchema } from "./TableSchema";


export class SubmitPreview extends $dara.Model {
  queryName?: string;
  sessionId?: string;
  tableSchemas?: TableSchema[];
  static names(): { [key: string]: string } {
    return {
      queryName: 'queryName',
      sessionId: 'sessionId',
      tableSchemas: 'tableSchemas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryName: 'string',
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

