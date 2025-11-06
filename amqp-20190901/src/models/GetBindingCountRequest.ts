// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBindingCountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bindingType?: number;
  consoleSessionId?: string;
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  upstream?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      bindingType: 'BindingType',
      consoleSessionId: 'ConsoleSessionId',
      instanceId: 'InstanceId',
      resourceName: 'ResourceName',
      upstream: 'Upstream',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingType: 'number',
      consoleSessionId: 'string',
      instanceId: 'string',
      resourceName: 'string',
      upstream: 'boolean',
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

