// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppPlayKeyResponseBodyAppPlayKey extends $dara.Model {
  /**
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @example
   * 2025-03-18T03:59:01Z
   */
  creationTime?: string;
  /**
   * @example
   * 2025-03-18T03:59:01Z
   */
  modificationTime?: string;
  /**
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
  appPlayKey?: GetAppPlayKeyResponseBodyAppPlayKey;
  /**
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

