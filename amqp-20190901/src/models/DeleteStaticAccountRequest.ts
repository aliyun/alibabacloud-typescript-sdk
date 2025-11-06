// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStaticAccountRequest extends $dara.Model {
  consoleSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  createTimeStamp?: number;
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      consoleSessionId: 'ConsoleSessionId',
      createTimeStamp: 'CreateTimeStamp',
      instanceId: 'InstanceId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleSessionId: 'string',
      createTimeStamp: 'number',
      instanceId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

