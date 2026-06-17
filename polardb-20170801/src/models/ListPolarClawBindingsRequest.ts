// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolarClawBindingsRequest extends $dara.Model {
  /**
   * @remarks
   * A list of agent IDs to filter the bindings.
   * 
   * @example
   * work,research
   */
  agentList?: string[];
  /**
   * @remarks
   * The application ID.
   * 
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

