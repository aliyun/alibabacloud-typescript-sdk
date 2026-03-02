// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PdpPbcUpdateCmd extends $dara.Model {
  alias?: string;
  description?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      description: 'description',
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      description: 'string',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

