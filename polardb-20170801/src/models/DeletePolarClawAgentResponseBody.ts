// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolarClawAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the deleted agent.
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
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The status code.
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
   * The number of automatically removed bindings.
   * 
   * @example
   * 1
   */
  removedBindings?: number;
  /**
   * @remarks
   * **The request ID.**
   * 
   * @example
   * 2281C6C9-CBAB-1AFD-8400-670750CF6025_2212
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      applicationId: 'ApplicationId',
      code: 'Code',
      message: 'Message',
      removedBindings: 'RemovedBindings',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      applicationId: 'string',
      code: 'number',
      message: 'string',
      removedBindings: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

