// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartPolarClawGatewayResponseBody extends $dara.Model {
  /**
   * @example
   * pa-xxx
   */
  applicationId?: string;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 3235
   */
  downtimeMs?: number;
  /**
   * @example
   * 2026.5.7
   */
  gatewayVersion?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * in-process
   */
  mode?: string;
  /**
   * @example
   * true
   */
  ok?: boolean;
  /**
   * @example
   * RestartPolarClawGateway
   */
  operation?: string;
  /**
   * @example
   * F45FFACC-xxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  restarted?: boolean;
  /**
   * @example
   * pending
   */
  state?: string;
  /**
   * @example
   * 0ee00f56-f467-4d41-858c-ca4ede2c770e
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      code: 'Code',
      downtimeMs: 'DowntimeMs',
      gatewayVersion: 'GatewayVersion',
      message: 'Message',
      mode: 'Mode',
      ok: 'Ok',
      operation: 'Operation',
      requestId: 'RequestId',
      restarted: 'Restarted',
      state: 'State',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      code: 'number',
      downtimeMs: 'number',
      gatewayVersion: 'string',
      message: 'string',
      mode: 'string',
      ok: 'boolean',
      operation: 'string',
      requestId: 'string',
      restarted: 'boolean',
      state: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

