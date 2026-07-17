// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAtiAgentRegisterInfoMarketRequest extends $dara.Model {
  /**
   * @example
   * example.com
   */
  agentHost?: string;
  /**
   * @example
   * 5.0.1
   */
  agentVersion?: string;
  /**
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cC.....
   */
  clientToken?: string;
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * 4698691
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      agentHost: 'AgentHost',
      agentVersion: 'AgentVersion',
      clientToken: 'ClientToken',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentHost: 'string',
      agentVersion: 'string',
      clientToken: 'string',
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

