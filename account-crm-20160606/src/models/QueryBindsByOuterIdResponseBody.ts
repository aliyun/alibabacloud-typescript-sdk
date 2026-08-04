// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBindsByOuterIdResponseBodyData extends $dara.Model {
  bindData?: { [key: string]: any };
  minorOuterId?: string;
  outerId?: string;
  pk?: string;
  status?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      bindData: 'BindData',
      minorOuterId: 'MinorOuterId',
      outerId: 'OuterId',
      pk: 'Pk',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      minorOuterId: 'string',
      outerId: 'string',
      pk: 'string',
      status: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    if(this.bindData) {
      $dara.Model.validateMap(this.bindData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBindsByOuterIdResponseBody extends $dara.Model {
  code?: string;
  data?: QueryBindsByOuterIdResponseBodyData[];
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryBindsByOuterIdResponseBodyData },
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

