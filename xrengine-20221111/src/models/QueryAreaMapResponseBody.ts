// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAreaMapResponseBodyData extends $dara.Model {
  d3Oss?: string;
  extInfo?: string;
  id?: number;
  locationOss?: string;
  mapType?: string;
  name?: string;
  note?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      d3Oss: 'D3Oss',
      extInfo: 'ExtInfo',
      id: 'Id',
      locationOss: 'LocationOss',
      mapType: 'MapType',
      name: 'Name',
      note: 'Note',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      d3Oss: 'string',
      extInfo: 'string',
      id: 'number',
      locationOss: 'string',
      mapType: 'string',
      name: 'string',
      note: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAreaMapResponseBody extends $dara.Model {
  code?: string;
  data?: QueryAreaMapResponseBodyData;
  errorName?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryAreaMapResponseBodyData,
      errorName: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

