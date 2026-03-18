// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePackageRequest extends $dara.Model {
  body?: string;
  isInstall?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      isInstall: 'isInstall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      isInstall: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

