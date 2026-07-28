// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPhysicalConnectionFeaturesResponseBodyPhysicalConnectionFeatures extends $dara.Model {
  /**
   * @remarks
   * The attribute key of the Express Connect circuit. Valid values:
   * 
   * - **SubifRateLimit**: sub-interface rate limiting.
   * - **BFD能力**: Bidirectional Forwarding Detection (BFD) capability.
   * - **DualStack**: the capability to support both IPv4 and IPv6.
   * - **CEN**: when a Virtual Border Router (VBR) is attached to a Cloud Enterprise Network (CEN) instance, the original route attributes such as **as-path** and **community** can be carried when advertising BGP routes to the user side.
   * - **CENv6**: when a VBR is attached to an IPv6-enabled CEN instance, the original route attributes such as **as-path** and **community** can be carried when advertising BGP routes to the user side.
   * - **QOS**: the device supports configuring QoS policies on physical ports.
   * - **MSHA**: the device supports configuring a fast failover group between two VBRs.
   * - **MULTI_MS_HA**: the device supports configuring a fast failover group among up to 8 VBRs. These VBRs must be added to the same Express Connect Router (ECR).
   * 
   * @example
   * SubifRateLimit
   */
  featureKey?: string;
  /**
   * @remarks
   * The attribute value of the Express Connect circuit. Valid values:
   * 
   * - **OK**: Supported.
   * - **NOK**: Not supported.
   * 
   * @example
   * OK
   */
  featureValue?: string;
  static names(): { [key: string]: string } {
    return {
      featureKey: 'FeatureKey',
      featureValue: 'FeatureValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureKey: 'string',
      featureValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhysicalConnectionFeaturesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of Express Connect circuit attributes.
   */
  physicalConnectionFeatures?: ListPhysicalConnectionFeaturesResponseBodyPhysicalConnectionFeatures[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A599D38F-3618-18FD-9427-108FB9B5BD26
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      physicalConnectionFeatures: 'PhysicalConnectionFeatures',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalConnectionFeatures: { 'type': 'array', 'itemType': ListPhysicalConnectionFeaturesResponseBodyPhysicalConnectionFeatures },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.physicalConnectionFeatures)) {
      $dara.Model.validateArray(this.physicalConnectionFeatures);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

