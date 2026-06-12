// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Machine extends $dara.Model {
  /**
   * @remarks
   * The host ID of the machine.
   * 
   * @example
   * test
   */
  hostId?: string;
  /**
   * @remarks
   * The IP address of the machine.
   * 
   * @example
   * 192.168.xx.x
   */
  ip?: string;
  /**
   * @remarks
   * The time of the last heartbeat. The value is a UNIX timestamp. It represents the number of seconds that have elapsed since 00:00:00 UTC on January 1, 1970.
   * 
   * @example
   * 1447182247
   */
  lastHeartbeatTime?: number;
  /**
   * @remarks
   * The unique identifier of the machine.
   * 
   * @example
   * 3B70F4F1-80F7-46C4-A6C1-100****EE647
   */
  machineUniqueid?: string;
  /**
   * @remarks
   * The custom identifier of the machine. This parameter is valid only when the identity type of the machine group is set to custom.
   * 
   * @example
   * 无
   */
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

