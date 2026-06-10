// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePerspectiveRequest extends $dara.Model {
  /**
   * @remarks
   * The agent key. If unspecified, the system uses the default agent. You can obtain this key from the Business Management page of your Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The description of the perspective.
   * 
   * @example
   * 用于购物APP的移动端视角
   */
  description?: string;
  /**
   * @remarks
   * The name of the perspective. The maximum length is 50 characters.
   * 
   * @example
   * 移动端视角
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

