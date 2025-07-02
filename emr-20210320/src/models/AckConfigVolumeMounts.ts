// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AckConfigVolumeMounts extends $dara.Model {
  name?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

