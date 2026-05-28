// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Machine extends $dara.Model {
  /**
   * @example
   * test
   */
  hostId?: string;
  /**
   * @example
   * 192.168.xx.x
   */
  ip?: string;
  /**
   * @example
   * 1447182247
   */
  lastHeartbeatTime?: number;
  /**
   * @example
   * 3B70F4F1-80F7-46C4-A6C1-100***CEE647
   */
  machineUniqueid?: string;
  userdefinedId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'host-id',
      ip: 'ip',
      lastHeartbeatTime: 'lastHeartbeatTime',
      machineUniqueid: 'machine-uniqueid',
      userdefinedId: 'userdefined-id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      ip: 'string',
      lastHeartbeatTime: 'number',
      machineUniqueid: 'string',
      userdefinedId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

