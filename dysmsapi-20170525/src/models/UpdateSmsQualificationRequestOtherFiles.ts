// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmsQualificationRequestOtherFiles extends $dara.Model {
  /**
   * @example
   * 123456/111.png
   */
  licensePic?: string;
  static names(): { [key: string]: string } {
    return {
      licensePic: 'LicensePic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licensePic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

