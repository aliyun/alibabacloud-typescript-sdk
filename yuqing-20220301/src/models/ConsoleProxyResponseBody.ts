// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConsoleProxyResponseBody extends $dara.Model {
  requestId?: string;
  resultJson?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resultJson: 'resultJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

