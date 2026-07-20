// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlterShareRequest extends $dara.Model {
  comment?: string;
  enableWrite?: boolean;
  shareName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      enableWrite: 'enableWrite',
      shareName: 'shareName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      enableWrite: 'boolean',
      shareName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

