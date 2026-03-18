// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootECSRequest extends $dara.Model {
  /**
   * @example
   * 8c96a3fc8a0d4a48b5db5fdb9742fbbc
   */
  eventId?: string;
  /**
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @example
   * 1772076782
   */
  rebootTime?: number;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      instanceId: 'InstanceId',
      rebootTime: 'RebootTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      instanceId: 'string',
      rebootTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

