// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GwpResourceConstitute extends $dara.Model {
  carbonEmission?: number;
  name?: string;
  percent?: string;
  resourceType?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmission: 'carbonEmission',
      name: 'name',
      percent: 'percent',
      resourceType: 'resourceType',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmission: 'number',
      name: 'string',
      percent: 'string',
      resourceType: 'number',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

