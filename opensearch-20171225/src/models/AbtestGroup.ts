// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ABTestGroup extends $dara.Model {
  name?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

