// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceTwoFactorResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether two-factor authentication is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableTwoFactor?: boolean;
  /**
   * @remarks
   * The duration within which two-factor authentication is not required after a local user passes two-factor authentication. Valid values: `0 to 168`. Unit: hours.
   * 
   * > If 0 is returned, a local user must pass two-factor authentication every time the local user logs on to the bastion host.
   * 
   * @example
   * 1
   */
  skipTwoFactorTime?: number;
  /**
   * @remarks
   * The two-factor authentication methods.
   */
  twoFactorMethods?: string[];
  static names(): { [key: string]: string } {
    return {
      enableTwoFactor: 'EnableTwoFactor',
      skipTwoFactorTime: 'SkipTwoFactorTime',
      twoFactorMethods: 'TwoFactorMethods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTwoFactor: 'boolean',
      skipTwoFactorTime: 'number',
      twoFactorMethods: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.twoFactorMethods)) {
      $dara.Model.validateArray(this.twoFactorMethods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTwoFactorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The settings of two-factor authentication.
   */
  config?: GetInstanceTwoFactorResponseBodyConfig;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: GetInstanceTwoFactorResponseBodyConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

