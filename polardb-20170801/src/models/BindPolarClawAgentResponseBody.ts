// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindPolarClawAgentResponseBodyBinding extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * default
   */
  accountId?: string;
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
   * The channel ID.
   * 
   * @example
   * feishu
   */
  channel?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      agentId: 'AgentId',
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      agentId: 'string',
      channel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindPolarClawAgentResponseBody extends $dara.Model {
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
   * Details of the newly created binding.
   */
  binding?: BindPolarClawAgentResponseBodyBinding;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * A message that indicates the request result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2281C6C9-CBAB-1AFD-8400-670750CF6025_2212
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of global bindings after the operation.
   * 
   * @example
   * 1
   */
  totalBindings?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      applicationId: 'ApplicationId',
      binding: 'Binding',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      totalBindings: 'TotalBindings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      applicationId: 'string',
      binding: BindPolarClawAgentResponseBodyBinding,
      code: 'number',
      message: 'string',
      requestId: 'string',
      totalBindings: 'number',
    };
  }

  validate() {
    if(this.binding && typeof (this.binding as any).validate === 'function') {
      (this.binding as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

