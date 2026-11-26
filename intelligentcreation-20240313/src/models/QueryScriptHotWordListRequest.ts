// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryScriptHotWordListRequest extends $dara.Model {
  hotWord?: string;
  pageNumber?: number;
  pageSize?: number;
  scriptRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      hotWord: 'hotWord',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      scriptRecordId: 'scriptRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotWord: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scriptRecordId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

