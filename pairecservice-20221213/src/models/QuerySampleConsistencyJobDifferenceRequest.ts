// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySampleConsistencyJobDifferenceRequest extends $dara.Model {
  featureName?: string;
  featureType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      featureName: 'FeatureName',
      featureType: 'FeatureType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureName: 'string',
      featureType: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

