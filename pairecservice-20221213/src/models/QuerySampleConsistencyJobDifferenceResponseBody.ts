// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySampleConsistencyJobDifferenceResponseBodyDifferenceHistogram } from "./QuerySampleConsistencyJobDifferenceResponseBodyDifferenceHistogram";
import { QuerySampleConsistencyJobDifferenceResponseBodyNumberFeatureDifferences } from "./QuerySampleConsistencyJobDifferenceResponseBodyNumberFeatureDifferences";
import { QuerySampleConsistencyJobDifferenceResponseBodyStringFeatureDifferences } from "./QuerySampleConsistencyJobDifferenceResponseBodyStringFeatureDifferences";


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

