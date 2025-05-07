// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TCPSocketAction extends $dara.Model {
  host?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

