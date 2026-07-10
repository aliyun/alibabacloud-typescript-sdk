// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryGroupCorpListResponseBodyModule extends $dara.Model {
  corpId?: string;
  corpName?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corp_id',
      corpName: 'corp_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      corpName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGroupCorpListResponseBody extends $dara.Model {
  requestId?: string;
  code?: number;
  message?: string;
  module?: QueryGroupCorpListResponseBodyModule[];
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      message: 'message',
      module: 'module',
      success: 'success',
      traceId: 'trace_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      message: 'string',
      module: { 'type': 'array', 'itemType': QueryGroupCorpListResponseBodyModule },
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

