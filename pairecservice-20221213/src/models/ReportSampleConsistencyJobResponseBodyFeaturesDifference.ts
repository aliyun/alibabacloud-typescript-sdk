// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportSampleConsistencyJobResponseBodyFeaturesDifference extends $dara.Model {
  count?: number;
  featureName?: string;
  featureType?: string;
  ratio?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      featureName: 'FeatureName',
      featureType: 'FeatureType',
      ratio: 'Ratio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      featureName: 'string',
      featureType: 'string',
      ratio: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

