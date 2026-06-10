// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceMetadataOptions extends $dara.Model {
  /**
   * @remarks
   * Configuration of the ECS instance metadata access mode. Valid values:  
   * 
   * * `optional`: Compatible with both NAT mode and hardened mode.  
   * * `required`: Enables hardened mode only (IMDSv2). After this mode is enabled, applications within edge zones cannot access ECS instance metadata through NAT mode.  
   * 
   * Default Value: `optional`.  
   * 
   * >Notice:   
   * 
   * * This parameter is currently available only to users on the whitelist. To use it, submit a ticket to request access.  
   * * This parameter is supported only in ACK managed clusters of version 1.28 or later.  
   * 
   *   
   * 
   * > For more information about instance metadata access modes, see [Instance Metadata Access Mode](https://help.aliyun.com/document_detail/108460.html).
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

