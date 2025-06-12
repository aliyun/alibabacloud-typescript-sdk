// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignUsersResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 1ca2b084-6f0a-454b-9851-29768a9a5832
   */
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * EEEE671A-3E24-4A04-81E6-6C4F5B39DF75
   */
  requestId?: string;
  /**
   * @example
   * 1ca2b084-6f0a-454b-9851-29768a9a5832
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      workflowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

