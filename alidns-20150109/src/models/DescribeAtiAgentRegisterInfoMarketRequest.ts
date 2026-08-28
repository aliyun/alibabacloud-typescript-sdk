// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAtiAgentRegisterInfoMarketRequest extends $dara.Model {
  /**
   * @remarks
   * The endpoint domain name through which the agent provides services externally.
   * 
   * @example
   * example.com
   */
  agentHost?: string;
  /**
   * @remarks
   * The agent version.
   * 
   * @example
   * 5.0.1
   */
  agentVersion?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cC.....
   */
  clientToken?: string;
  /**
   * @remarks
   * The maximum number of entries to return in this request.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query.
   * 
   * @example
   * 4698691
   */
  nextToken?: string;
  trustLevel?: string;
  static names(): { [key: string]: string } {
    return {
      agentHost: 'AgentHost',
      agentVersion: 'AgentVersion',
      clientToken: 'ClientToken',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      trustLevel: 'TrustLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentHost: 'string',
      agentVersion: 'string',
      clientToken: 'string',
      maxResults: 'number',
      nextToken: 'string',
      trustLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

