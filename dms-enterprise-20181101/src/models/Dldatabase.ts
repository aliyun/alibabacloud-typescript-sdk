// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DLDatabase extends $dara.Model {
  catalogName?: string;
  dbId?: number;
  description?: string;
  location?: string;
  name?: string;
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      dbId: 'DbId',
      description: 'Description',
      location: 'Location',
      name: 'Name',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      dbId: 'number',
      description: 'string',
      location: 'string',
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

