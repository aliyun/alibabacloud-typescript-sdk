// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * UUID of the workspace: AgentKey
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * Maximum number of returned results
   * 
   * @example
   * 66
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for the next page
   * 
   * @example
   * 下一页的token
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

