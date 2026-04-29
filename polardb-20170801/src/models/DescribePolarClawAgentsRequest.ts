// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawAgentsRequest extends $dara.Model {
  /**
   * @example
   * work,research
   */
  agentList?: string[];
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
      agentList: 'AgentList',
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentList: { 'type': 'array', 'itemType': 'string' },
      applicationId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentList)) {
      $dara.Model.validateArray(this.agentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

