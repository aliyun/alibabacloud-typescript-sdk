// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebuildDesktopsResponseBodyRebuildResults extends $dara.Model {
  /**
   * @remarks
   * The recreation result code. If the request was successful, `success` is returned. If the request failed, an error message is returned.
   * 
   * @example
   * IncorrectDesktopStatus
   */
  code?: string;
  /**
   * @remarks
   * The IDs of the cloud computers.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * The error message. This parameter is invalid if the value of `Code` is `success`.
   * 
   * @example
   * The current status of the desktop does not support this operation.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      desktopId: 'DesktopId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desktopId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

