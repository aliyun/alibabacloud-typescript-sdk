// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePerspectiveRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If not specified, the default business space is used. You can get the key from the Business Management page of your main account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The name of the perspective. The name must be 50 characters or fewer.
   * 
   * @example
   * 客户端视角
   */
  name?: string;
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
      name: 'Name',
      perspectiveId: 'PerspectiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      name: 'string',
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

