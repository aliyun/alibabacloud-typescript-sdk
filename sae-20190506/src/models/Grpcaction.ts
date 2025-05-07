// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GRPCAction extends $dara.Model {
  port?: number;
  service?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'port',
      service: 'service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      service: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

