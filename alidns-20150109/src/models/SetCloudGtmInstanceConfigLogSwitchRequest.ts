// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetCloudGtmInstanceConfigLogSwitchRequest extends $dara.Model {
  /**
   * @example
   * F4D7C841-A1C9-50B4-88B7-F5****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Config-000****
   */
  configId?: string;
  /**
   * @example
   * gtm-cn-wwo3a3h****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * enable
   * disable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configId: 'ConfigId',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configId: 'string',
      instanceId: 'string',
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

