// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancePasswordsSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a logon password is set for the simple application server.
   * 
   * @example
   * true
   */
  instancePasswordSetting?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether a VNC connection password is set for the simple application server.
   * 
   * @example
   * true
   */
  vncPasswordSetting?: boolean;
  static names(): { [key: string]: string } {
    return {
      instancePasswordSetting: 'InstancePasswordSetting',
      requestId: 'RequestId',
      vncPasswordSetting: 'VncPasswordSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancePasswordSetting: 'boolean',
      requestId: 'string',
      vncPasswordSetting: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

