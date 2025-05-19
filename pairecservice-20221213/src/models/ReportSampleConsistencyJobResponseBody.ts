// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReportSampleConsistencyJobResponseBodyFeaturesDifference } from "./ReportSampleConsistencyJobResponseBodyFeaturesDifference";


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

