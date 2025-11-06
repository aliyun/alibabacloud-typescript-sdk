// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindRequest extends $dara.Model {
  bindingKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  bindingType?: number;
  consoleSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dstName?: string;
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  srcName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      bindingKey: 'BindingKey',
      bindingType: 'BindingType',
      consoleSessionId: 'ConsoleSessionId',
      dstName: 'DstName',
      instanceId: 'InstanceId',
      srcName: 'SrcName',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingKey: 'string',
      bindingType: 'number',
      consoleSessionId: 'string',
      dstName: 'string',
      instanceId: 'string',
      srcName: 'string',
      vhostName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

