// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCorpDetailInfoResponseBodyModule extends $dara.Model {
  /**
   * @example
   * btrip5txxxxxxx
   */
  corpId?: string;
  corpName?: string;
  /**
   * @example
   * open12********012jq
   */
  openAgentId?: string;
  superAdminName?: string;
  /**
   * @example
   * 138xxxx0001
   */
  superAdminPhone?: string;
  /**
   * @example
   * user1234
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corp_id',
      corpName: 'corp_name',
      openAgentId: 'open_agent_id',
      superAdminName: 'super_admin_name',
      superAdminPhone: 'super_admin_phone',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      corpName: 'string',
      openAgentId: 'string',
      superAdminName: 'string',
      superAdminPhone: 'string',
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

export class QueryCorpDetailInfoResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: QueryCorpDetailInfoResponseBodyModule;
  /**
   * @example
   * C61ECFF6-****-****-****-D77369043A5F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 21041ce********056433edbb2
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
      module: QueryCorpDetailInfoResponseBodyModule,
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

