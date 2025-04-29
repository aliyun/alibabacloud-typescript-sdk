// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePluginApisResponseBodyApiSummarysApiPluginSummary } from "./DescribePluginApisResponseBodyApiSummarysApiPluginSummary";


export class DescribePluginApisResponseBodyApiSummarys extends $dara.Model {
  apiPluginSummary?: DescribePluginApisResponseBodyApiSummarysApiPluginSummary[];
  static names(): { [key: string]: string } {
    return {
      apiPluginSummary: 'ApiPluginSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiPluginSummary: { 'type': 'array', 'itemType': DescribePluginApisResponseBodyApiSummarysApiPluginSummary },
    };
  }

  validate() {
    if(Array.isArray(this.apiPluginSummary)) {
      $dara.Model.validateArray(this.apiPluginSummary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

