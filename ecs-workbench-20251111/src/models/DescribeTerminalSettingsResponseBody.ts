// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribeTerminalSettingsResponseBodyPasswordlessLoginConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTerminalSettingsResponseBody extends $dara.Model {
  passwordlessLoginConfig?: DescribeTerminalSettingsResponseBodyPasswordlessLoginConfig;
  /**
   * @remarks
   * 请求ID
   * 
   * @example
   * 47348885-C929-489A-93D7-B2E99D50D77B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      passwordlessLoginConfig: 'PasswordlessLoginConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordlessLoginConfig: DescribeTerminalSettingsResponseBodyPasswordlessLoginConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.passwordlessLoginConfig && typeof (this.passwordlessLoginConfig as any).validate === 'function') {
      (this.passwordlessLoginConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

