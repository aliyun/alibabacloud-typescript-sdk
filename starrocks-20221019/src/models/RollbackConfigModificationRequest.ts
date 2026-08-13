// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackConfigModificationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration modification history.
   * 
   * @example
   * 187291
   */
  configHistoryId?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to restart the instance after the configuration is changed. Valid values:
   * 
   * - **true**: Restart the instance.
   * 
   * - **false**: Do not restart the instance.
   * 
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

