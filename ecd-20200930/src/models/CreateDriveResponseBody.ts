// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDriveResponseBodyDrive } from "./CreateDriveResponseBodyDrive";


export class CreateDriveResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  drive?: CreateDriveResponseBodyDrive;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * B7AA****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      drive: 'Drive',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      drive: CreateDriveResponseBodyDrive,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.drive && typeof (this.drive as any).validate === 'function') {
      (this.drive as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

