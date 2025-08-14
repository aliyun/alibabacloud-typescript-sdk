// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNacosMcpServerRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @example
   * mse_prepaid_public_cn-tl327w****
   */
  instanceId?: string;
  /**
   * @example
   * 5e3c5211-d365-4013-8540-c4106ec2a5dc
   */
  mcpServerId?: string;
  /**
   * @example
   * 1.0.0
   */
  mcpServerVersion?: string;
  /**
   * @example
   * 5e3ee449-b5c0-4aee-b857-32c0acbebf26
   */
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      instanceId: 'InstanceId',
      mcpServerId: 'McpServerId',
      mcpServerVersion: 'McpServerVersion',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      instanceId: 'string',
      mcpServerId: 'string',
      mcpServerVersion: 'string',
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

