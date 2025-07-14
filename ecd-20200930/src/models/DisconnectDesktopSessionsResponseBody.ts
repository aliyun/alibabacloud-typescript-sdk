// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisconnectDesktopSessionsResponseBodyInvalidSessions extends $dara.Model {
  /**
   * @remarks
   * The cloud desktop ID.
   * 
   * @example
   * ecd-2jv6wugbkp65pxxxx
   */
  desktopId?: string;
  /**
   * @remarks
   * The end user ID.
   * 
   * @example
   * wy01
   */
  endUserId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      endUserId: 'EndUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      endUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisconnectDesktopSessionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of invalid sessions.
   */
  invalidSessions?: DisconnectDesktopSessionsResponseBodyInvalidSessions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2507CFA8-FEAB-5208-98F5-5E028C50XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invalidSessions: 'InvalidSessions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidSessions: { 'type': 'array', 'itemType': DisconnectDesktopSessionsResponseBodyInvalidSessions },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.invalidSessions)) {
      $dara.Model.validateArray(this.invalidSessions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

