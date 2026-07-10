// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CorpTokenResponseBodyData extends $dara.Model {
  expire?: number;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expire: 'expire',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expire: 'number',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CorpTokenResponseBodyModule extends $dara.Model {
  expire?: number;
  start?: number;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expire: 'expire',
      start: 'start',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expire: 'number',
      start: 'number',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CorpTokenResponseBody extends $dara.Model {
  code?: string;
  data?: CorpTokenResponseBodyData;
  message?: string;
  module?: CorpTokenResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CorpTokenResponseBodyData,
      message: 'string',
      module: CorpTokenResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

