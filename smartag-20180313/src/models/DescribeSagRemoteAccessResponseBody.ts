// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagRemoteAccessResponseBodyRemoteAccessesRemoteAccess extends $dara.Model {
  remoteAccessIp?: string;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      remoteAccessIp: 'RemoteAccessIp',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remoteAccessIp: 'string',
      serialNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRemoteAccessResponseBodyRemoteAccesses extends $dara.Model {
  remoteAccess?: DescribeSagRemoteAccessResponseBodyRemoteAccessesRemoteAccess[];
  static names(): { [key: string]: string } {
    return {
      remoteAccess: 'RemoteAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remoteAccess: { 'type': 'array', 'itemType': DescribeSagRemoteAccessResponseBodyRemoteAccessesRemoteAccess },
    };
  }

  validate() {
    if(Array.isArray(this.remoteAccess)) {
      $dara.Model.validateArray(this.remoteAccess);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRemoteAccessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. The 200 error code indicates that the query task is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message. The Successful error message indicates that the query task is successful.
   * 
   * @example
   * successful
   */
  message?: string;
  remoteAccesses?: DescribeSagRemoteAccessResponseBodyRemoteAccesses;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E38E950D-28A4-4C41-9428-A8908EC6AE5C
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * @example
   * sag-1um5x5nwhilymw****
   */
  smartAGId?: string;
  /**
   * @remarks
   * Indicates whether the query task is successful. Valid values:
   * 
   * *   **true**: The query task is successful.
   * *   **false**: The query task failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      remoteAccesses: 'RemoteAccesses',
      requestId: 'RequestId',
      smartAGId: 'SmartAGId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      remoteAccesses: DescribeSagRemoteAccessResponseBodyRemoteAccesses,
      requestId: 'string',
      smartAGId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.remoteAccesses && typeof (this.remoteAccesses as any).validate === 'function') {
      (this.remoteAccesses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

