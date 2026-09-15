// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallMcpMarketItemShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The MCP configuration submitted during template installation. The configuration must conform to the input schema of the template.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The template version to install. You can call GetMcpMarketItem to query available versions.
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

