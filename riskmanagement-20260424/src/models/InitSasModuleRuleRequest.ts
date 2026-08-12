// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitSasModuleRuleRequestInstances extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores of the asset.
   * 
   * @example
   * 4
   */
  cores?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-gw85zjrhsg2sgex7ovfx
   */
  instanceId?: string;
  /**
   * @remarks
   * The region of the cloud phone.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The UUID of the instance.
   * 
   * @example
   * 168d374e-f449-4d0b-9556-14f233fa7171
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'string',
      instanceId: 'string',
      regionId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitSasModuleRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic binding. Valid values:
   * 
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 0
   */
  autoBind?: number;
  /**
   * @remarks
   * The list of instances.
   */
  instances?: InitSasModuleRuleRequestInstances[];
  /**
   * @remarks
   * Specifies whether to use the trial version.
   * 
   * @example
   * false
   */
  isTrial?: boolean;
  /**
   * @remarks
   * The region ID of the access control instance.
   * 
   * @example
   * cn-guangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoBind: 'AutoBind',
      instances: 'Instances',
      isTrial: 'IsTrial',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBind: 'number',
      instances: { 'type': 'array', 'itemType': InitSasModuleRuleRequestInstances },
      isTrial: 'boolean',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

