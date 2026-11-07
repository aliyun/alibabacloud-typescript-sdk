// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNacosMcpServerRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned results. Valid values: zh (default): Chinese. en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * mse_prepaid_public_cn-u0t2xzvxa06
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the MCP Server.
   * 
   * @example
   * 5e3c5211-d365-4013-8540-c4106ec2a5dc
   */
  mcpServerId?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * fc0f6e40-****-946b-45e3af313707
   */
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      instanceId: 'InstanceId',
      mcpServerId: 'McpServerId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      instanceId: 'string',
      mcpServerId: 'string',
      namespaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

