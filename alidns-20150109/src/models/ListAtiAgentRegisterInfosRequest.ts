// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAtiAgentRegisterInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the Agent.
   * 
   * @example
   * TestAgent
   */
  agentDisplayName?: string;
  /**
   * @remarks
   * The host address of the Agent.
   * 
   * @example
   * www.example.com
   */
  agentHost?: string;
  /**
   * @remarks
   * The Agent ID, which is uniformly assigned by CNNIC after real-name verification. The AgentID serves as the unique identifier that binds the Agent to the verified registrant.
   * 
   * @example
   * liuq@azt400
   */
  agentId?: string;
  /**
   * @remarks
   * The version of the Agent.
   * 
   * @example
   * 1.0.0
   */
  agentVersion?: string;
  /**
   * @remarks
   * Ensures the idempotency of the request. Generate a parameter value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cC.....
   */
  clientToken?: string;
  /**
   * @remarks
   * The maximum number of records to return in this request.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * 4698691
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number. The start value is 1. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size for the paging query.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the Agent.
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentDisplayName: 'AgentDisplayName',
      agentHost: 'AgentHost',
      agentId: 'AgentId',
      agentVersion: 'AgentVersion',
      clientToken: 'ClientToken',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentDisplayName: 'string',
      agentHost: 'string',
      agentId: 'string',
      agentVersion: 'string',
      clientToken: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

