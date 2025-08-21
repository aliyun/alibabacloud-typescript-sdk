// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFaqRequest extends $dara.Model {
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
   * 1000053274
   */
  categoryId?: number;
  /**
   * @example
   * 2030-12-31T16:00:00Z
   */
  endDate?: string;
  solutionContent?: string;
  /**
   * @example
   * 0
   */
  solutionType?: number;
  /**
   * @example
   * 2022-05-25T16:28:36Z
   */
  startDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      categoryId: 'CategoryId',
      endDate: 'EndDate',
      solutionContent: 'SolutionContent',
      solutionType: 'SolutionType',
      startDate: 'StartDate',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      categoryId: 'number',
      endDate: 'string',
      solutionContent: 'string',
      solutionType: 'number',
      startDate: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

