// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLogDeliverySLRRequest extends $dara.Model {
  consoleSessionId?: string;
  static names(): { [key: string]: string } {
    return {
      consoleSessionId: 'ConsoleSessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleSessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

