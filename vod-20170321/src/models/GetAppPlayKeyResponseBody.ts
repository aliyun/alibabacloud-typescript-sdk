// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppPlayKeyResponseBodyAppPlayKey extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The time when the playback key was created. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2025-03-18T03:59:01Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The time when the playback key was last modified. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2025-03-18T03:59:01Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The playback key.
   * - Only uppercase letters, lowercase letters, and digits are supported. The length must be 8 to 20 characters.
   * - UTF-8 encoding.
   * 
   * @example
   * yzNgTUtAl6HAuosIA
   */
  playKey?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      creationTime: 'CreationTime',
      modificationTime: 'ModificationTime',
      playKey: 'PlayKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      creationTime: 'string',
      modificationTime: 'string',
      playKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppPlayKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application playback key information.
   */
  appPlayKey?: GetAppPlayKeyResponseBodyAppPlayKey;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4A*****F6-D7393642CA58
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appPlayKey: 'AppPlayKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appPlayKey: GetAppPlayKeyResponseBodyAppPlayKey,
      requestId: 'string',
    };
  }

  validate() {
    if(this.appPlayKey && typeof (this.appPlayKey as any).validate === 'function') {
      (this.appPlayKey as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

