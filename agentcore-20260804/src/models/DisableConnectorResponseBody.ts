// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableConnectorResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of Agents bound to the Connector.
   * 
   * @example
   * 3
   */
  boundAgentCount?: number;
  /**
   * @remarks
   * The time when the Connector was enabled.
   * 
   * @example
   * 2026-09-01T08:00:00Z
   */
  enabledAt?: string;
  /**
   * @remarks
   * The Connector configuration JSON string before the Connector was disabled. This is sensitive data.
   * 
   * @example
   * {"site":"global","organizationId":"org-xxxx"}
   */
  metadata?: string;
  /**
   * @remarks
   * The Connector name. Currently, the value is qodercli.
   * 
   * @example
   * qodercli
   */
  name?: string;
  /**
   * @remarks
   * The Connector status.
   * 
   * @example
   * ENABLED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      boundAgentCount: 'boundAgentCount',
      enabledAt: 'enabledAt',
      metadata: 'metadata',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundAgentCount: 'number',
      enabledAt: 'string',
      metadata: 'string',
      name: 'string',
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

export class DisableConnectorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The Connector details.
   */
  data?: DisableConnectorResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-123456
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DisableConnectorResponseBodyData,
      httpStatusCode: 'number',
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

