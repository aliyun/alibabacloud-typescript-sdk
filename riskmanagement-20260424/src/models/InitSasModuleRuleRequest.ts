// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitSasModuleRuleRequestInstances extends $dara.Model {
  /**
   * @example
   * 4
   */
  cores?: string;
  /**
   * @example
   * i-gw85zjrhsg2sgex7ovfx
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
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
   * @example
   * 0
   */
  autoBind?: number;
  instances?: InitSasModuleRuleRequestInstances[];
  /**
   * @example
   * false
   */
  isTrial?: boolean;
  /**
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

