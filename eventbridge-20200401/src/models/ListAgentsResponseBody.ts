// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Agent } from "./Agent";


export class ListAgentsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of agents.
   */
  agents?: Agent[];
  /**
   * @remarks
   * The ID of the first record.
   * 
   * @example
   * uat-agent
   */
  firstId?: string;
  /**
   * @remarks
   * Indicates whether more pages are available. Valid values:
   * 
   * - true: More pages are available.
   * 
   * - false: No more pages are available.
   * 
   * @example
   * false
   */
  hasMore?: string;
  /**
   * @remarks
   * The ID of the last record.
   * 
   * @example
   * last-agent
   */
  lastId?: string;
  static names(): { [key: string]: string } {
    return {
      agents: 'Agents',
      firstId: 'FirstId',
      hasMore: 'HasMore',
      lastId: 'LastId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agents: { 'type': 'array', 'itemType': Agent },
      firstId: 'string',
      hasMore: 'string',
      lastId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agents)) {
      $dara.Model.validateArray(this.agents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code. Valid values: Success: The operation was successful.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListAgentsResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Failed to list agents
   */
  message?: string;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for the request.
   * 
   * @example
   * 7DA60DED-CD36-5837-B848-C01A23D2****
   */
  requestId?: string;
  /**
   * @remarks
   * Returns true if the operation is successful.
   * 
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
      data: ListAgentsResponseBodyData,
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

