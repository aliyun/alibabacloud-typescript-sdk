// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UserMetricsEndpoint extends $dara.Model {
  path?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
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

