// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TableKnowledgeInfo } from "./TableKnowledgeInfo";


export class GetTableKnowledgeInfoResponseBody extends $dara.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  table?: TableKnowledgeInfo;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      table: TableKnowledgeInfo,
    };
  }

  validate() {
    if(this.table && typeof (this.table as any).validate === 'function') {
      (this.table as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

