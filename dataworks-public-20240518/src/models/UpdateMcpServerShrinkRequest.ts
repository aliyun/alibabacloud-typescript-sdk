// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMcpServerShrinkRequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  customHeadersShrink?: string;
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
   * SSE
   */
  transport?: string;
  /**
   * @example
   * https://example.com/mcp/sse
   */
  url?: string;
  /**
   * @example
   * TENANT
   */
  visibility?: string;
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

