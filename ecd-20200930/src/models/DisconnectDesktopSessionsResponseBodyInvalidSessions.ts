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

