// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBdrcServiceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the service was enabled (UNIX timestamp).
   * 
   * @example
   * 1726169608
   */
  openTime?: number;
  /**
   * @remarks
   * The time when the data protection score was updated (UNIX timestamp).
   * 
   * @example
   * 1726169608
   */
  protectionScoreUpdatedTime?: number;
  /**
   * @remarks
   * The initialization status of the service.
   * 
   * @example
   * SUCCESS
   */
  serviceInitializeStatus?: string;
  /**
   * @remarks
   * The enabling status of the service.
   * 
   * @example
   * OPENED
   */
  serviceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      openTime: 'OpenTime',
      protectionScoreUpdatedTime: 'ProtectionScoreUpdatedTime',
      serviceInitializeStatus: 'ServiceInitializeStatus',
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openTime: 'number',
      protectionScoreUpdatedTime: 'number',
      serviceInitializeStatus: 'string',
      serviceStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBdrcServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data that is returned if the call is successful.
   */
  data?: GetBdrcServiceResponseBodyData;
  /**
   * @remarks
   * The unique identity of the request.
   * 
   * @example
   * 5748C531-80B1-5C31-8421-63A1830B9E48
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetBdrcServiceResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

