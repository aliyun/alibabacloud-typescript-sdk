// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MqTopicDigest extends $dara.Model {
  alias?: string;
  createTime?: string;
  id?: number;
  messageType?: string;
  name?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      createTime: 'CreateTime',
      id: 'Id',
      messageType: 'MessageType',
      name: 'Name',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      createTime: 'string',
      id: 'number',
      messageType: 'string',
      name: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

