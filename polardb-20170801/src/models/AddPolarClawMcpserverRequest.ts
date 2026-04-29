// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPolarClawMCPServerRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * {
   *     "command": "node",
   *     "args": [
   *         "-y",
   *         "@polarclaw/mcp-dev"
   *     ]
   * }
   */
  serverConfig?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-v1
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      serverConfig: 'ServerConfig',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      serverConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      serverName: 'string',
    };
  }

  validate() {
    if(this.serverConfig) {
      $dara.Model.validateMap(this.serverConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

