// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePluginGroupsResponseBodyGroupSummarysGroupPluginSummary } from "./DescribePluginGroupsResponseBodyGroupSummarysGroupPluginSummary";


export class DescribePluginGroupsResponseBodyGroupSummarys extends $dara.Model {
  groupPluginSummary?: DescribePluginGroupsResponseBodyGroupSummarysGroupPluginSummary[];
  static names(): { [key: string]: string } {
    return {
      groupPluginSummary: 'GroupPluginSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupPluginSummary: { 'type': 'array', 'itemType': DescribePluginGroupsResponseBodyGroupSummarysGroupPluginSummary },
    };
  }

  validate() {
    if(Array.isArray(this.groupPluginSummary)) {
      $dara.Model.validateArray(this.groupPluginSummary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

