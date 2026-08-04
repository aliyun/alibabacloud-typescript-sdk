// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEnterpriseAcceleratePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The acceleration mode:
   * - **whiltelist**: whitelist acceleration
   * - **global**: global acceleration
   * - **build-in-list**: built-in system application acceleration
   * 
   * @example
   * whitelist
   */
  accelerationType?: string;
  /**
   * @remarks
   * The description of the enterprise acceleration policy.
   * 
   * @example
   * 这是一条内网访问策略
   */
  description?: string;
  /**
   * @remarks
   * The ID of the enterprise acceleration policy.
   * 
   * @example
   * eap-ce153a7165c8feea
   */
  eapId?: string;
  /**
   * @remarks
   * The name of the enterprise acceleration policy.
   * 
   * @example
   * 白名单策略001
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to enable TLS mode:
   * - **0**: disable
   * - **1**: enable
   * 
   * @example
   * 0
   */
  onTls?: number;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 49
   */
  priority?: number;
  /**
   * @remarks
   * Specifies whether to display on the client:
   * - **0**: do not display
   * - **1**: display
   * 
   * @example
   * 0
   */
  showInClient?: number;
  /**
   * @remarks
   * The address (IP or domain name) of the acceleration instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 12.34.56.XX
   */
  upstreamHost?: string;
  /**
   * @remarks
   * The port of the acceleration instance (between 1000 and 60000).
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  upstreamPort?: number;
  /**
   * @remarks
   * The acceleration instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga
   */
  upstreamType?: string;
  /**
   * @remarks
   * The acceleration user group.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试用户组
   */
  userAttributeGroup?: string;
  static names(): { [key: string]: string } {
    return {
      accelerationType: 'AccelerationType',
      description: 'Description',
      eapId: 'EapId',
      name: 'Name',
      onTls: 'OnTls',
      priority: 'Priority',
      showInClient: 'ShowInClient',
      upstreamHost: 'UpstreamHost',
      upstreamPort: 'UpstreamPort',
      upstreamType: 'UpstreamType',
      userAttributeGroup: 'UserAttributeGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerationType: 'string',
      description: 'string',
      eapId: 'string',
      name: 'string',
      onTls: 'number',
      priority: 'number',
      showInClient: 'number',
      upstreamHost: 'string',
      upstreamPort: 'number',
      upstreamType: 'string',
      userAttributeGroup: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

