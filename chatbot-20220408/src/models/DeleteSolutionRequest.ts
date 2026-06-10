// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSolutionRequest extends $dara.Model {
  /**
   * @remarks
   * The key for the business space. If you omit this parameter, the default business space is used. You can obtain this key from the Business Management page of your main account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The ID of the solution.
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

