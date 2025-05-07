// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceCodeRepo extends $dara.Model {
  fullName?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      fullName: 'FullName',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullName: 'string',
      id: 'string',
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

