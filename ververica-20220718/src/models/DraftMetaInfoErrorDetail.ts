// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DraftMetaInfoErrorDetail extends $dara.Model {
  message?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

