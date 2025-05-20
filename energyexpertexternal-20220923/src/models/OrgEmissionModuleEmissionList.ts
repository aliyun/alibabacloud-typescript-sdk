// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OrgEmissionModuleEmissionList extends $dara.Model {
  carbonEmissionData?: number;
  name?: string;
  nameKey?: string;
  ratio?: number;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

