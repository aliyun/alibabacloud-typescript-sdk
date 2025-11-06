// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserSettingRequest extends $dara.Model {
  consoleSessionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      consoleSessionId: 'ConsoleSessionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleSessionId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

