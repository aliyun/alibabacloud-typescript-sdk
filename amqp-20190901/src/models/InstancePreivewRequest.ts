// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstancePreivewRequest extends $dara.Model {
  consoleSessionId?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      consoleSessionId: 'ConsoleSessionId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleSessionId: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

