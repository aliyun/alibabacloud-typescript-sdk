// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DomainBuildClientConfig extends $dara.Model {
  copyright?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      copyright: 'copyright',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copyright: 'string',
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

