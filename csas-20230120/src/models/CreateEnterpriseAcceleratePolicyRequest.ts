// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnterpriseAcceleratePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Acceleration pattern:
   * 
   * - **whitelist**: Whitelist acceleration
   * 
   * - **global**: Global acceleration
   * 
   * - **build-in-list**: Built-in application acceleration
   * 
   * @example
   * whitelist
   */
  accelerationType?: string;
  /**
   * @remarks
   * Policy description. Length: 1 to 512 characters.
   * 
   * @example
   * 用于全局网络访问的加速策略
   */
  description?: string;
  /**
   * @remarks
   * Policy Name.
   * 
   * @example
   * 全局加速策略
   */
  name?: string;
  /**
   * @remarks
   * Priority.
   * 
   * @example
   * 99
   */
  priority?: string;
  /**
   * @remarks
   * Whether to display this policy in the client:
   * 
   * - **0**: Do not display
   * 
   * - **1**: Display
   * 
   * @example
   * 1
   */
  showInClient?: number;
  /**
   * @remarks
   * The IP address or domain name of the acceleration instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 12.34.56.XX
   */
  upstreamHost?: string;
  /**
   * @remarks
   * Port for the accelerated instance. The port must be between 1000 and 60000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  upstreamPort?: number;
  /**
   * @remarks
   * Accelerated instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga
   */
  upstreamType?: string;
  /**
   * @remarks
   * User group for acceleration.
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
      name: 'Name',
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
      name: 'string',
      priority: 'string',
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

