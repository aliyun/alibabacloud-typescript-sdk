// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Agent } from "./Agent";


export class GetAgentResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: Agent;
  /**
   * @example
   * Agent with name \\"xxx\\" not found for account 1186xxx
   */
  message?: string;
  /**
   * @example
   * E0FFAB67-XXXXXX-CAD4D37448C4
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: Agent,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

