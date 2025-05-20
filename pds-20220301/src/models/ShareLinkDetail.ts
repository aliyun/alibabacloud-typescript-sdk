// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShareLinkDetail extends $dara.Model {
  enableOfficeEditable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableOfficeEditable: 'enable_office_editable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableOfficeEditable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

