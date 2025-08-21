// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConnQuestionRequest extends $dara.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 877397683
   */
  outlineId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      outlineId: 'OutlineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      outlineId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

