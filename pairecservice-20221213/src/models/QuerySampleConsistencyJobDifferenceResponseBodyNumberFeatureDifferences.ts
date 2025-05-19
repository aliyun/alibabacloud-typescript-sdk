// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySampleConsistencyJobDifferenceResponseBodyNumberFeatureDifferences extends $dara.Model {
  diffValue?: number;
  itemId?: string;
  replyTableFeatureValue?: number;
  requestId?: string;
  sampleTableFeatureValue?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      diffValue: 'DiffValue',
      itemId: 'ItemId',
      replyTableFeatureValue: 'ReplyTableFeatureValue',
      requestId: 'RequestId',
      sampleTableFeatureValue: 'SampleTableFeatureValue',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diffValue: 'number',
      itemId: 'string',
      replyTableFeatureValue: 'number',
      requestId: 'string',
      sampleTableFeatureValue: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

