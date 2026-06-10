// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePerspectiveRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If you do not set this parameter, the default business space is used. You can obtain the key on the Business Management page of your Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The perspective ID.
   * 
   * @example
   * 3001
   */
  perspectiveId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      perspectiveId: 'PerspectiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      perspectiveId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

