// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySampleConsistencyJobDifferenceResponseBodyStringFeatureDifferences extends $dara.Model {
  itemId?: string;
  replyTableFeatureValue?: string;
  requestId?: string;
  sampleTableFeatureValue?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      replyTableFeatureValue: 'ReplyTableFeatureValue',
      requestId: 'RequestId',
      sampleTableFeatureValue: 'SampleTableFeatureValue',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'string',
      replyTableFeatureValue: 'string',
      requestId: 'string',
      sampleTableFeatureValue: 'string',
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

