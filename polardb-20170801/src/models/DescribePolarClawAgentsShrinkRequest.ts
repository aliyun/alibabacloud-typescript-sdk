// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawAgentsShrinkRequest extends $dara.Model {
  /**
   * @example
   * work,research
   */
  agentListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  static names(): { [key: string]: string } {
    return {
      agentListShrink: 'AgentList',
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentListShrink: 'string',
      applicationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

