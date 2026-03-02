// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PdpLog extends $dara.Model {
  content?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      ip: 'ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      ip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

