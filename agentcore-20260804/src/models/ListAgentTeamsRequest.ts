// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentTeamsRequestBody extends $dara.Model {
  /**
   * @remarks
   * The list of agent IDs for which to query team information.
   * 
   * This parameter is required.
   */
  agentIds?: string[];
  static names(): { [key: string]: string } {
    return {
      agentIds: 'agentIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.agentIds)) {
      $dara.Model.validateArray(this.agentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentTeamsRequest extends $dara.Model {
  /**
   * @remarks
   * The request parameters for querying the agent team list.
   */
  body?: ListAgentTeamsRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ListAgentTeamsRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

