// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceMetadataOptions extends $dara.Model {
  /**
   * @remarks
   * The ECS instance metadata access mode configuration. Valid values:
   * 
   * * `optional`: Compatible with both normal mode and hardened mode.
   * * `required`: Enables hardened mode only (IMDSv2). After this mode is enabled, applications in the node cannot access ECS instance metadata in normal mode.
   * 
   * Default value: `optional`.
   * 
   * >Notice: 
   * 
   * * This parameter is currently available only by whitelist. To use this parameter, submit a ticket.
   * * Only ACK managed clusters of version 1.28 and later support this parameter.
   * 
   * 
   * 
   * > For more information about instance metadata access modes, see [Instance metadata access modes](https://help.aliyun.com/document_detail/108460.html).
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  static names(): { [key: string]: string } {
    return {
      httpTokens: 'http_tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpTokens: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

