// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitSasModuleRuleShrinkRequest extends $dara.Model {
  autoBind?: number;
  instancesShrink?: string;
  isTrial?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoBind: 'AutoBind',
      instancesShrink: 'Instances',
      isTrial: 'IsTrial',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBind: 'number',
      instancesShrink: 'string',
      isTrial: 'boolean',
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

