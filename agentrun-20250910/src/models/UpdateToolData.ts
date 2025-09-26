// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateToolData extends $dara.Model {
  id?: string;
  name?: string;
  sourceType?: string;
  toolType?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      sourceType: 'sourceType',
      toolType: 'toolType',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      sourceType: 'string',
      toolType: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

