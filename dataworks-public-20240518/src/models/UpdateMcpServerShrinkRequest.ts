// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMcpServerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The new custom request headers, specified as key-value pairs.
   * 
   * @example
   * {}
   */
  customHeadersShrink?: string;
  /**
   * @remarks
   * The name of the MCP Server to update.
   * 
   * This parameter is required.
   * 
   * @example
   * my-mcp-server
   */
  name?: string;
  /**
   * @remarks
   * The new transport protocol.
   * 
   * @example
   * SSE
   */
  transport?: string;
  /**
   * @remarks
   * The new service address. The address must start with`https://`.
   * 
   * @example
   * https://example.com/mcp/sse
   */
  url?: string;
  /**
   * @remarks
   * The new visibility level.
   * 
   * @example
   * TENANT
   */
  visibility?: string;
  /**
   * @remarks
   * The new visibility scope. The fields in this object depend on the value of the `Visibility` parameter.
   */
  visibilityScopeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      customHeadersShrink: 'CustomHeaders',
      name: 'Name',
      transport: 'Transport',
      url: 'Url',
      visibility: 'Visibility',
      visibilityScopeShrink: 'VisibilityScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customHeadersShrink: 'string',
      name: 'string',
      transport: 'string',
      url: 'string',
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

