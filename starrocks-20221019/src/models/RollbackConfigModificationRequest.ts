// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackConfigModificationRequest extends $dara.Model {
  /**
   * @example
   * 187291
   */
  configHistoryId?: number;
  /**
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @example
   * true
   */
  restart?: boolean;
  static names(): { [key: string]: string } {
    return {
      configHistoryId: 'ConfigHistoryId',
      instanceId: 'InstanceId',
      restart: 'Restart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configHistoryId: 'number',
      instanceId: 'string',
      restart: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

