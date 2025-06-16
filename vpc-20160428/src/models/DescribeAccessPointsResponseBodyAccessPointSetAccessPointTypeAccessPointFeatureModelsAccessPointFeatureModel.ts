// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessPointsResponseBodyAccessPointSetAccessPointTypeAccessPointFeatureModelsAccessPointFeatureModel extends $dara.Model {
  /**
   * @remarks
   * The feature of the access point.
   * 
   * @example
   * AP_Support_VbrBandwidthLimit
   */
  featureKey?: string;
  /**
   * @remarks
   * The feature value of the access point.
   * 
   * @example
   * true
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

