// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChannelCorpCreateResponseBodyModule extends $dara.Model {
  administratorName?: string;
  administratorPhone?: string;
  corpId?: string;
  corpName?: string;
  openAgentId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      administratorName: 'administrator_name',
      administratorPhone: 'administrator_phone',
      corpId: 'corp_id',
      corpName: 'corp_name',
      openAgentId: 'open_agent_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      administratorName: 'string',
      administratorPhone: 'string',
      corpId: 'string',
      corpName: 'string',
      openAgentId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChannelCorpCreateResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: ChannelCorpCreateResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
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
      message: 'string',
      module: ChannelCorpCreateResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

