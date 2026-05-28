// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScanFileInputConfig extends $dara.Model {
  autoCrop?: string;
  autoRotate?: string;
  static names(): { [key: string]: string } {
    return {
      autoCrop: 'autoCrop',
      autoRotate: 'autoRotate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCrop: 'string',
      autoRotate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

