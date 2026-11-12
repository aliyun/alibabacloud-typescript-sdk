// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMcpTemplateConfigShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The MCP configuration updated based on the specified template version. The configuration must comply with the input schema of the template.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * The reserved query request identifier. The console backend does not read this parameter and does not provide idempotency guarantees such as deduplication or returning the original processing result based on this identifier.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The template version used for this update.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0.0
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
      clientToken: 'clientToken',
      templateVersion: 'templateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
      clientToken: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

