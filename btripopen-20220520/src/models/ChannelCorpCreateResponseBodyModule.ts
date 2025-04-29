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

