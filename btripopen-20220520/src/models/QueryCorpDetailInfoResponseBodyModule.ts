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

