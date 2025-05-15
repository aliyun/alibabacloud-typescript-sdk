// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServicesResponseBodyServicesServiceInfosSoftwares extends $dara.Model {
  name?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

