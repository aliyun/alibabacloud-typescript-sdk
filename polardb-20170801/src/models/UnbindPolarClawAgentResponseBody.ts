// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindPolarClawAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * work
   */
  agentId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-********************
   */
  applicationId?: string;
  /**
   * @remarks
   * The status code of the response.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The number of removed bindings.
   * 
   * @example
   * 1
   */
  removedCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 24A1990B-4F6E-482B-B8CB-75C612******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of bindings after the operation.
   * 
   * @example
   * 0
   */
  totalBindings?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      applicationId: 'ApplicationId',
      code: 'Code',
      message: 'Message',
      removedCount: 'RemovedCount',
      requestId: 'RequestId',
      totalBindings: 'TotalBindings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      applicationId: 'string',
      code: 'number',
      message: 'string',
      removedCount: 'number',
      requestId: 'string',
      totalBindings: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

