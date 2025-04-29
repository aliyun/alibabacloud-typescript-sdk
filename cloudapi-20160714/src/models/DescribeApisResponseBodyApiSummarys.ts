// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisResponseBodyApiSummarysApiSummary } from "./DescribeApisResponseBodyApiSummarysApiSummary";


export class DescribeApisResponseBodyApiSummarys extends $dara.Model {
  apiSummary?: DescribeApisResponseBodyApiSummarysApiSummary[];
  static names(): { [key: string]: string } {
    return {
      apiSummary: 'ApiSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSummary: { 'type': 'array', 'itemType': DescribeApisResponseBodyApiSummarysApiSummary },
    };
  }

  validate() {
    if(Array.isArray(this.apiSummary)) {
      $dara.Model.validateArray(this.apiSummary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

