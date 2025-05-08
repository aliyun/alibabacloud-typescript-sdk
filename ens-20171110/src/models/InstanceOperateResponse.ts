// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceOperateResponse extends $dara.Model {
  code?: number;
  instanceId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instanceId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

