// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOfficeConversionTaskRequestSources extends $dara.Model {
  rotate?: number;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      rotate: 'Rotate',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rotate: 'number',
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

