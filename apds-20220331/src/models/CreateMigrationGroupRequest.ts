// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMigrationGroupRequest extends $dara.Model {
  description?: string;
  extra?: string;
  id?: number;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      extra: 'extra',
      id: 'id',
      name: 'name',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      extra: 'string',
      id: 'number',
      name: 'string',
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

