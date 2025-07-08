// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCardSendExportInfoRequest extends $dara.Model {
  pageNo?: number;
  pageSize?: number;
  status?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      status: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

