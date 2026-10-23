// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallPluginRequest extends $dara.Model {
  /**
   * @remarks
   * The names of the system plug-ins to uninstall.
   * 
   * @example
   * ["aliyun-sql","codec-compression"]
   */
  body?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to forcibly uninstall the plug-ins. You can use this parameter to cancel the installation of plug-ins that are being installed. This parameter is only applicable to instances that use the new architecture. Default value: false.
   * 
   * @example
   * false
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      clientToken: 'string',
      force: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

