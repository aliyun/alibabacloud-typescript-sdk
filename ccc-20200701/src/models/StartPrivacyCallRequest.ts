// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartPrivacyCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALIPUBB7A727C170949
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1888888****
   */
  callee?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0109810****
   */
  caller?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callee: 'Callee',
      caller: 'Caller',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callee: 'string',
      caller: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

