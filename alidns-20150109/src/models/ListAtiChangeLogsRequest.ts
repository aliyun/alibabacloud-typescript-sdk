// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAtiChangeLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID assigned by CNNIC after real-name authentication. The AgentID serves as the unique identifier that binds the agent to the real-name authenticated registrant.
   * 
   * @example
   * Justin@underarmour
   */
  agentId?: string;
  /**
   * @remarks
   * Ensures the idempotency of the request. Generate a parameter value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters and cannot exceed 64 characters.
   * 
   * - If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may differ for each API request.
   * 
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cC.....
   */
  clientToken?: string;
  /**
   * @remarks
   * The end time of the query (timestamp).
   * 
   * @example
   * 1474335170000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The operation type of the Operation logs log record, such as modifying an agent.
   * 
   * @example
   * 2074753647748672512
   */
  operationType?: string;
  /**
   * @remarks
   * The UID of the operator.
   * 
   * @example
   * 1646808646232999
   */
  operatorAccount?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Maximum value: 100. Default value: 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query (timestamp).
   * 
   * @example
   * 1474335170000
   */
  startTimestamp?: number;
  /**
   * @remarks
   * Ignore.
   * 
   * @example
   * Ignore
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      clientToken: 'ClientToken',
      endTimestamp: 'EndTimestamp',
      operationType: 'OperationType',
      operatorAccount: 'OperatorAccount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTimestamp: 'StartTimestamp',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      clientToken: 'string',
      endTimestamp: 'number',
      operationType: 'string',
      operatorAccount: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTimestamp: 'number',
      timeRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

