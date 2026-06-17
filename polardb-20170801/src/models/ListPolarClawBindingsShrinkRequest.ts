// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolarClawBindingsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of agent IDs to filter the bindings.
   * 
   * @example
   * work,research
   */
  agentListShrink?: string;
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

