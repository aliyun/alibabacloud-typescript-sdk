// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcpServerShrinkRequest extends $dara.Model {
  /**
   * @example
   * -
   */
  configShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-mcp-server
   */
  name?: string;
  /**
   * @example
   * TENANT
   */
  visibility?: string;
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

