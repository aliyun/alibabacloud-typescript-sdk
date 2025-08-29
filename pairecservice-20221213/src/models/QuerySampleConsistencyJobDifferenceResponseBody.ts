// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySampleConsistencyJobDifferenceResponseBodyDifferenceHistogram extends $dara.Model {
  abscissa?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      abscissa: 'Abscissa',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abscissa: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class QuerySampleConsistencyJobDifferenceResponseBody extends $dara.Model {
  differenceHistogram?: QuerySampleConsistencyJobDifferenceResponseBodyDifferenceHistogram[];
  numberFeatureDifferences?: QuerySampleConsistencyJobDifferenceResponseBodyNumberFeatureDifferences[];
  requestId?: string;
  stringFeatureDifferences?: QuerySampleConsistencyJobDifferenceResponseBodyStringFeatureDifferences[];
  static names(): { [key: string]: string } {
    return {
      differenceHistogram: 'DifferenceHistogram',
      numberFeatureDifferences: 'NumberFeatureDifferences',
      requestId: 'RequestId',
      stringFeatureDifferences: 'StringFeatureDifferences',
    };
  }

  static types(): { [key: string]: any } {
    return {
      differenceHistogram: { 'type': 'array', 'itemType': QuerySampleConsistencyJobDifferenceResponseBodyDifferenceHistogram },
      numberFeatureDifferences: { 'type': 'array', 'itemType': QuerySampleConsistencyJobDifferenceResponseBodyNumberFeatureDifferences },
      requestId: 'string',
      stringFeatureDifferences: { 'type': 'array', 'itemType': QuerySampleConsistencyJobDifferenceResponseBodyStringFeatureDifferences },
    };
  }

  validate() {
    if(Array.isArray(this.differenceHistogram)) {
      $dara.Model.validateArray(this.differenceHistogram);
    }
    if(Array.isArray(this.numberFeatureDifferences)) {
      $dara.Model.validateArray(this.numberFeatureDifferences);
    }
    if(Array.isArray(this.stringFeatureDifferences)) {
      $dara.Model.validateArray(this.stringFeatureDifferences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

