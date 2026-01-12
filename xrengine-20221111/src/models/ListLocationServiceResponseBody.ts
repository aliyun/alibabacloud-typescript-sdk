// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLocationServiceResponseBodyData extends $dara.Model {
  appId?: string;
  expireTime?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  name?: string;
  note?: string;
  qps?: number;
  startTime?: string;
  status?: string;
  svcState?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      expireTime: 'ExpireTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      note: 'Note',
      qps: 'Qps',
      startTime: 'StartTime',
      status: 'Status',
      svcState: 'SvcState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      expireTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      note: 'string',
      qps: 'number',
      startTime: 'string',
      status: 'string',
      svcState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLocationServiceResponseBody extends $dara.Model {
  code?: string;
  current?: number;
  data?: ListLocationServiceResponseBodyData[];
  errorName?: string;
  httpCode?: number;
  message?: string;
  pages?: number;
  requestId?: string;
  size?: number;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      pages: 'Pages',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListLocationServiceResponseBodyData },
      errorName: 'string',
      httpCode: 'number',
      message: 'string',
      pages: 'number',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

