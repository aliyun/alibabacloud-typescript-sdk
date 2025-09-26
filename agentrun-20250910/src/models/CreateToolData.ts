// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateToolData extends $dara.Model {
  createdAt?: string;
  id?: string;
  name?: string;
  sourceType?: string;
  toolType?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      id: 'id',
      name: 'name',
      sourceType: 'sourceType',
      toolType: 'toolType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      id: 'string',
      name: 'string',
      sourceType: 'string',
      toolType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

