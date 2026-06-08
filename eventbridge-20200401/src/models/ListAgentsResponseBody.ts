// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Agent } from "./Agent";


export class ListAgentsResponseBodyData extends $dara.Model {
  agents?: Agent[];
  /**
   * @example
   * uat-agent
   */
  firstId?: string;
  /**
   * @example
   * false
   */
  hasMore?: string;
  /**
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
   * @example
   * Success
   */
  code?: string;
  data?: ListAgentsResponseBodyData;
  /**
   * @example
   * Failed to list agents
   */
  message?: string;
  /**
   * @example
   * 7DA60DED-CD36-5837-B848-C01A23D2****
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

