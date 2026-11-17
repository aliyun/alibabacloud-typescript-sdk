// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFirewallFeatureResponseBodyFeatures extends $dara.Model {
  /**
   * @remarks
   * The feature name. Valid values:
   * - **ApplicationControl**: Application control.
   * - **WebFilter**: Web filtering.
   * 
   * @example
   * ApplicationControl
   */
  featureName?: string;
  /**
   * @remarks
   * The activation status of the feature. Valid values:
   * - **Enable**: Enabled.
   * - **Disable**: Disabled.
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

export class GetFirewallFeatureResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of firewall feature statuses. This list always returns the statuses of application control and web filtering.
   */
  features?: GetFirewallFeatureResponseBodyFeatures[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': GetFirewallFeatureResponseBodyFeatures },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.features)) {
      $dara.Model.validateArray(this.features);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

