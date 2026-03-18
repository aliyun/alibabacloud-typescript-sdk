// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPackageRequest extends $dara.Model {
  sourceProject?: string;
  static names(): { [key: string]: string } {
    return {
      sourceProject: 'sourceProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceProject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

