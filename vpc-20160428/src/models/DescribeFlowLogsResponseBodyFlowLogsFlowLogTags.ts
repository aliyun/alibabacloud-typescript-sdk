// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFlowLogsResponseBodyFlowLogsFlowLogTagsTag } from "./DescribeFlowLogsResponseBodyFlowLogsFlowLogTagsTag";


export class DescribeFlowLogsResponseBodyFlowLogsFlowLogTags extends $dara.Model {
  tag?: DescribeFlowLogsResponseBodyFlowLogsFlowLogTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeFlowLogsResponseBodyFlowLogsFlowLogTagsTag },
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

