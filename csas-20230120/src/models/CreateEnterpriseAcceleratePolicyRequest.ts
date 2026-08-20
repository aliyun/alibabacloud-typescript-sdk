// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnterpriseAcceleratePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The acceleration mode. Valid values:
   * - **whiltelist**: whitelist-based acceleration.
   * - **global**: global acceleration.
   * - **build-in-list**: built-in application acceleration.
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
   * GlobalAccelerationPolicy
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
   * Specifies whether to display the policy in the client. Valid values:
   * - **0**: not displayed.
   * - **1**: displayed.
   * 
   * @example
   * 1
   */
  showInClient?: number;
  /**
   * @remarks
   * The address (IP address or domain name) of the acceleration instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 12.34.56.XX
   */
  upstreamHost?: string;
  /**
   * @remarks
   * The port of the acceleration instance. Valid values: 1000 to 60000.
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
   * TestUserGroup
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

