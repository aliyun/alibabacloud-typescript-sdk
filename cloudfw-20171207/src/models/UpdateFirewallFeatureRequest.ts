// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFirewallFeatureRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the feature to enable. Valid values:
   * - **ApplicationControl**: application control
   * - **WebFilter**: web filtering
   * 
   * This parameter is required.
   * 
   * @example
   * ApplicationControl
   */
  featureName?: string;
  /**
   * @remarks
   * The status of the feature. Only **Enable** is supported, which enables the feature. Specifying Disable or other values returns an error. This operation is idempotent if the feature is already enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * Enable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      featureName: 'FeatureName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

