// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPhysicalConnectionFeaturesResponseBodyPhysicalConnectionFeatures extends $dara.Model {
  /**
   * @remarks
   * The feature key of the Express Connect circuit. Valid values:
   * 
   * *   **SubifRateLimit**: subinterface throttling
   * *   **BFD Capability**: Bidirectional Forwarding Detection (BFD)
   * *   **DualStack**: Dual stack
   * *   **CEN**: When a virtual border router (VBR) is attached to a Cloud Enterprise Network (CEN) instance and BGP routes are advertised on the user side, attributes such as **as-path** and **community** are carried.
   * *   **CENv6**: When a VBR is attached to an IPv6 CEN instance and BGP routes are advertised on the user side, attributes such as **as-path** and **community** are carried.
   * *   **QOS**: The device supports configuring QOS policies on physical ports.
   * *   **MSHA**: The device supports fast switching groups between two VBRs.
   * *   **MULTI_MS_HA**: The device supports a maximum of eight VBRs that can be added to the same ECR.
   * 
   * @example
   * SubifRateLimit
   */
  featureKey?: string;
  /**
   * @remarks
   * The feature value of the Express Connect circuit. Valid values:
   * 
   * *   **OK**: Supported
   * *   **NOK**: Not supported
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
   * The list of Express Connect circuit features.
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

