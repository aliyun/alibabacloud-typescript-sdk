// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIspFlushCacheTaskResponseBodyFlushCacheResultsDnsNodesAnswers extends $dara.Model {
  name?: string;
  record?: string;
  ttl?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      record: 'Record',
      ttl: 'Ttl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      record: 'string',
      ttl: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

