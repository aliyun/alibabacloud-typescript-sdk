// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnterpriseAcceleratePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The acceleration mode. Valid values:
   * - **whiltelist**: whitelist acceleration
   * - **global**: global acceleration
   * - **build-in-list**: built-in application acceleration
   * 
   * @example
   * whitelist
   */
  accelerationType?: string;
  /**
   * @remarks
   * The description of the enterprise management policy. The description must be 1 to 512 characters in length.
   * 
   * @example
   * Acceleration policy for global network access
   */
  description?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * Global acceleration policy
   */
  name?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 99
   */
  priority?: string;
  /**
   * @remarks
   * Specifies whether the policy is displayed on the client. Valid values:
   * - **0**: not displayed
   * - **1**: displayed
   * 
   * @example
   * 1
   */
  showInClient?: number;
  /**
   * @remarks
   * The address of the accelerated instance, which can be an IP address or a domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * 12.34.56.XX
   */
  upstreamHost?: string;
  /**
   * @remarks
   * The port of the accelerated instance. Valid values: 1000 to 60000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  upstreamPort?: number;
  /**
   * @remarks
   * The accelerated instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga
   */
  upstreamType?: string;
  /**
   * @remarks
   * The accelerated user group.
   * 
   * This parameter is required.
   * 
   * @example
   * Test user group
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

