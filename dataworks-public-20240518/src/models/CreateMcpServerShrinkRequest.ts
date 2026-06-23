// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcpServerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The connection configuration for the MCP Server.
   * 
   * @example
   * -
   */
  configShrink?: string;
  /**
   * @remarks
   * The name of the MCP Server. The name must be unique at the tenant level. It must start with a lowercase letter and contain only characters from `a-z`, `0-9`, `_`, and `-`.
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
   * The visibility scope. The required fields depend on the value of the `Visibility` parameter.
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

