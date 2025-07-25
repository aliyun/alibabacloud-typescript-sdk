// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsOperateLogsResponseBodyLogs extends $dara.Model {
  action?: string;
  operateTime?: string;
  type?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      operateTime: 'OperateTime',
      type: 'Type',
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      operateTime: 'string',
      type: 'string',
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsOperateLogsResponseBody extends $dara.Model {
  logs?: DescribePdnsOperateLogsResponseBodyLogs[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': DescribePdnsOperateLogsResponseBodyLogs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

