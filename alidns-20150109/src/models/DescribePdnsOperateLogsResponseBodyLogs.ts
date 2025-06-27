// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsOperateLogsResponseBodyLogs extends $dara.Model {
  action?: string;
  operateTime?: string;
  type?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      operateTime: 'OperateTime',
      type: 'Type',
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      operateTime: 'string',
      type: 'string',
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

