// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MCPServerConfig extends $dara.Model {
  serverUrl?: string;
  ssePath?: string;
  transportType?: string;
  static names(): { [key: string]: string } {
    return {
      serverUrl: 'serverUrl',
      ssePath: 'ssePath',
      transportType: 'transportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverUrl: 'string',
      ssePath: 'string',
      transportType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

