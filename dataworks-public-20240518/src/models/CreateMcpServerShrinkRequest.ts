// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcpServerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The connection configuration of the MCP server.
   * 
   * @example
   * {"Transport":"SSE","Url":"https://example.com/mcp/sse","CustomHeaders":{}}
   */
  configShrink?: string;
  /**
   * @remarks
   * The name of the MCP server. The name must be unique at the tenant level. It must start with a lowercase letter and can contain only lowercase letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * my-mcp-server
   */
  name?: string;
  /**
   * @remarks
   * The visibility level.
   * 
   * @example
   * TENANT
   */
  visibility?: string;
  /**
   * @remarks
   * The visibility scope. Specify the corresponding field based on the value of Visibility.
   */
  visibilityScopeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      configShrink: 'Config',
      name: 'Name',
      visibility: 'Visibility',
      visibilityScopeShrink: 'VisibilityScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configShrink: 'string',
      name: 'string',
      visibility: 'string',
      visibilityScopeShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

