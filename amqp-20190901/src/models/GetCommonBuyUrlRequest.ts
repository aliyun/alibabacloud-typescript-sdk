// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCommonBuyUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  actionType?: string;
  consoleSessionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      consoleSessionId: 'ConsoleSessionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
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

