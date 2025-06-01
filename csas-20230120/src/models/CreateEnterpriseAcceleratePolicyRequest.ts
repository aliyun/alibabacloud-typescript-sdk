// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnterpriseAcceleratePolicyRequest extends $dara.Model {
  /**
   * @example
   * whitelist
   */
  accelerationType?: string;
  description?: string;
  name?: string;
  /**
   * @example
   * 99
   */
  priority?: string;
  /**
   * @example
   * 1
   */
  showInClient?: number;
  /**
   * @example
   * 12.34.56.XX
   */
  upstreamHost?: string;
  /**
   * @example
   * 1000
   */
  upstreamPort?: number;
  /**
   * @example
   * ga
   */
  upstreamType?: string;
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

