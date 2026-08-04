// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAgRelationCountAndQuotaResponseBodyData extends $dara.Model {
  accountCount?: number;
  mpk?: string;
  nullObject?: boolean;
  quota?: number;
  static names(): { [key: string]: string } {
    return {
      accountCount: 'AccountCount',
      mpk: 'Mpk',
      nullObject: 'NullObject',
      quota: 'Quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCount: 'number',
      mpk: 'string',
      nullObject: 'boolean',
      quota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAgRelationCountAndQuotaResponseBody extends $dara.Model {
  code?: string;
  data?: QueryAgRelationCountAndQuotaResponseBodyData;
  httpCode?: string;
  message?: string;
  nullObject?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      nullObject: 'NullObject',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryAgRelationCountAndQuotaResponseBodyData,
      httpCode: 'string',
      message: 'string',
      nullObject: 'boolean',
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

