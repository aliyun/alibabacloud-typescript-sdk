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

export class ReportSampleConsistencyJobResponseBody extends $dara.Model {
  featuresDifference?: ReportSampleConsistencyJobResponseBodyFeaturesDifference[];
  replyTableFeatures?: number;
  replyTableLostFeatures?: number;
  requestId?: number;
  sampleTableFeatures?: number;
  sampleTableLostFeatures?: number;
  static names(): { [key: string]: string } {
    return {
      featuresDifference: 'FeaturesDifference',
      replyTableFeatures: 'ReplyTableFeatures',
      replyTableLostFeatures: 'ReplyTableLostFeatures',
      requestId: 'RequestId',
      sampleTableFeatures: 'SampleTableFeatures',
      sampleTableLostFeatures: 'SampleTableLostFeatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featuresDifference: { 'type': 'array', 'itemType': ReportSampleConsistencyJobResponseBodyFeaturesDifference },
      replyTableFeatures: 'number',
      replyTableLostFeatures: 'number',
      requestId: 'number',
      sampleTableFeatures: 'number',
      sampleTableLostFeatures: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.featuresDifference)) {
      $dara.Model.validateArray(this.featuresDifference);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

