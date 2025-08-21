// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePerspectiveRequest extends $dara.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * 客户端视角
   */
  name?: string;
  /**
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

