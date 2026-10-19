// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAgentConfigSupportedRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the component to update. You can obtain the component ID from the ListAgents operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  agentId?: string;
  /**
   * @remarks
   * The configuration dimension to check, such as cluster or node.
   * 
   * @example
   * instance
   */
  checkType?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c726e7497b7d246d09d8644ed62effacc
   */
  clusters?: string;
  /**
   * @remarks
   * The ID of the component configuration to install.
   * 
   * This parameter is required.
   * 
   * @example
   * 4d5ecf02-3d01-11f0-8c90-00163e1029a
   */
  configId?: string;
  /**
   * @remarks
   * The configuration content.
   * 
   * @example
   * {\\"code\\": \\"BABA\\", \\"changeRate\\": \\"-1.434%\\", \\"exchange\\": \\"NYSE\\", \\"price\\": \\"112.690\\", \\"changePrice\\": \\"-$1.640\\", \\"currency\\": \\"USD\\", \\"date\\": \\"2026-06-11T20:01 EDT\\"}
   */
  content?: string;
  /**
   * @remarks
   * The list of instances. Separate multiple instance IDs with commas (,).
   * 
   * @example
   * i-bp10ktsji8vsbd8gco5i,i-bp1163pp7k7njfggvuqp,i-bp12ytprghv6rwzfgypm
   */
  instances?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      checkType: 'checkType',
      clusters: 'clusters',
      configId: 'configId',
      content: 'content',
      instances: 'instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      checkType: 'string',
      clusters: 'string',
      configId: 'string',
      content: 'string',
      instances: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

