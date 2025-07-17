// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SimplyAddInstanceResponseBodyInstance extends $dara.Model {
  /**
   * @example
   * 192.168.XXX.XXX
   */
  host?: string;
  /**
   * @example
   * 188****
   */
  instanceId?: string;
  /**
   * @example
   * 5432
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      instanceId: 'InstanceId',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      instanceId: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimplyAddInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  instance?: SimplyAddInstanceResponseBodyInstance;
  /**
   * @example
   * 7FAD400F-7A5C-4193-8F9A-39D86C4F0231
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      instance: 'Instance',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      instance: SimplyAddInstanceResponseBodyInstance,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

