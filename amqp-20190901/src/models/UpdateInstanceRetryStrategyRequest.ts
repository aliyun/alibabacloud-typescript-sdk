// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceRetryStrategyRequest extends $dara.Model {
  consoleSessionId?: string;
  instanceId?: string;
  retryInterval?: number;
  retryTimes?: number;
  static names(): { [key: string]: string } {
    return {
      consoleSessionId: 'ConsoleSessionId',
      instanceId: 'InstanceId',
      retryInterval: 'RetryInterval',
      retryTimes: 'RetryTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleSessionId: 'string',
      instanceId: 'string',
      retryInterval: 'number',
      retryTimes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

