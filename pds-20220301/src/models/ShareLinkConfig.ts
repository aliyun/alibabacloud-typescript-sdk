// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShareLinkConfig extends $dara.Model {
  enableShareLinkOfficeEdit?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableShareLinkOfficeEdit: 'enable_share_link_office_edit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableShareLinkOfficeEdit: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

