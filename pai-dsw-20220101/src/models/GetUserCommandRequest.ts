// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserCommandRequest extends $dara.Model {
  instanceId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

