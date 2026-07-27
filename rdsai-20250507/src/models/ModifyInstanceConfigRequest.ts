// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceConfigRequest extends $dara.Model {
  branchName?: string;
  /**
   * @remarks
   * The idempotency parameter.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the configuration item to modify. This parameter is used together with ConfigValue.
   * 
   * @example
   * eip、nat
   */
  configName?: string;
  /**
   * @remarks
   * The value of the configuration item to modify. This parameter is used together with ConfigName.
   * 
   * @example
   * on、off
   */
  configValue?: string;
  /**
   * @remarks
   * The instance ID of the AI application.
   * 
   * This parameter is required.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
      clientToken: 'ClientToken',
      configName: 'ConfigName',
      configValue: 'ConfigValue',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      clientToken: 'string',
      configName: 'string',
      configValue: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

