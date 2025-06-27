// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIspFlushCacheTaskResponseBodyFlushCacheResultsDnsNodesAnswers } from "./DescribeIspFlushCacheTaskResponseBodyFlushCacheResultsDnsNodesAnswers";


export class DescribeIspFlushCacheTaskResponseBodyFlushCacheResultsDnsNodes extends $dara.Model {
  answers?: DescribeIspFlushCacheTaskResponseBodyFlushCacheResultsDnsNodesAnswers[];
  nodeIp?: string;
  spName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      nodeIp: 'NodeIp',
      spName: 'SpName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: { 'type': 'array', 'itemType': DescribeIspFlushCacheTaskResponseBodyFlushCacheResultsDnsNodesAnswers },
      nodeIp: 'string',
      spName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.answers)) {
      $dara.Model.validateArray(this.answers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

