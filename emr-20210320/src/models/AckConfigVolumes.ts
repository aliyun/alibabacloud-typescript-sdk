// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AckConfigVolumes extends $dara.Model {
  name?: string;
  path?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      path: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

