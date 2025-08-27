// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChannelCorpCreateResponseBodyModule extends $dara.Model {
  administratorName?: string;
  /**
   * @example
   * 18378889782
   */
  administratorPhone?: string;
  /**
   * @example
   * dingaa15ca45cba9ee744a5
   */
  corpId?: string;
  corpName?: string;
  /**
   * @example
   * open12mplkebufu8701012jq
   */
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
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: ChannelCorpCreateResponseBodyModule;
  /**
   * @example
   * C61ECFF6-606B-5F66-B81D-D77369043A5F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 21041ce316577904808056433edbb2
   */
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

