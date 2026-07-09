// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSpacesRequest extends $dara.Model {
  /**
   * @remarks
   * The AgentSpace name.
   * 
   * @example
   * test-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * pEL20OGYeZQez8NdW7ve
   */
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

