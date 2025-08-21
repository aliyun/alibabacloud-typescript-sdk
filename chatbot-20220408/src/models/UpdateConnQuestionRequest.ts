// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConnQuestionRequest extends $dara.Model {
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
   * 1000000295
   */
  connQuestionId?: number;
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
      connQuestionId: 'ConnQuestionId',
      outlineId: 'OutlineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      connQuestionId: 'number',
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

