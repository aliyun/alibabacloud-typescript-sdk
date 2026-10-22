// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSolutionRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the business space. If this parameter is not specified, the default business space is accessed. You can obtain the key on the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The ID of the answer.
   * 
   * This parameter is required.
   * 
   * @example
   * 100001321580
   */
  solutionId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      solutionId: 'SolutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      solutionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

