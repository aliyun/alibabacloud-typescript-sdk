// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPolarClawMCPServerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The configuration object for the MCP server.
   * 
   * @example
   * {
   *     "command": "node",
   *     "args": [
   *         "-y",
   *         "@polarclaw/mcp-dev"
   *     ]
   * }
   */
  serverConfigShrink?: string;
  /**
   * @remarks
   * The unique identifier for the MCP server.
   * 
   * This parameter is required.
   * 
   * @example
   * test-v1
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      serverConfigShrink: 'ServerConfig',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      serverConfigShrink: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

