// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataBusinessesValue } from "./DataBusinessesValue";


export class GetSdkListResponseBodyData extends $dara.Model {
  businesses?: { [key: string]: DataBusinessesValue[] };
  static names(): { [key: string]: string } {
    return {
      businesses: 'Businesses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businesses: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataBusinessesValue } },
    };
  }

  validate() {
    if(this.businesses) {
      $dara.Model.validateMap(this.businesses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSdkListResponseBody extends $dara.Model {
  code?: string;
  data?: GetSdkListResponseBodyData;
  httpStatusCode?: number;
  logExt?: any;
  message?: string;
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      logExt: 'LogExt',
      message: 'Message',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSdkListResponseBodyData,
      httpStatusCode: 'number',
      logExt: 'any',
      message: 'string',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
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

