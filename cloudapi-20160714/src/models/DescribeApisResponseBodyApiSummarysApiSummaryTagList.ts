// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisResponseBodyApiSummarysApiSummaryTagListTag } from "./DescribeApisResponseBodyApiSummarysApiSummaryTagListTag";


export class DescribeApisResponseBodyApiSummarysApiSummaryTagList extends $dara.Model {
  tag?: DescribeApisResponseBodyApiSummarysApiSummaryTagListTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeApisResponseBodyApiSummarysApiSummaryTagListTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

