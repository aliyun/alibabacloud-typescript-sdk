// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitSasModuleRuleRequestInstances extends $dara.Model {
  cores?: string;
  instanceId?: string;
  regionId?: string;
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
  autoBind?: number;
  instances?: InitSasModuleRuleRequestInstances[];
  isTrial?: boolean;
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

