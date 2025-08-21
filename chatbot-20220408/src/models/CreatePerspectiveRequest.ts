// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePerspectiveRequest extends $dara.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * 用于购物APP的移动端视角
   */
  description?: string;
  /**
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

