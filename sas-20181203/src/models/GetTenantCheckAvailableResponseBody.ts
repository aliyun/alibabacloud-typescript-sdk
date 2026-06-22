// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTenantCheckAvailableResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the next time when a one-click scan can be submitted.
   * 
   * @example
   * 1725530005357
   */
  nextScanTime?: number;
  /**
   * @remarks
   * The current status of the one-click scan. Valid values:
   * 
   * - 0: The one-click scan can be submitted.
   * 
   * - 1: The current task is not complete. The scan cannot be submitted.
   * 
   * - 2: The free scan quota for this week has been used. Wait until the next free scan time.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      nextScanTime: 'NextScanTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextScanTime: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTenantCheckAvailableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetTenantCheckAvailableResponseBodyData;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 69BFFCDE-37D6-5A49-A8BC-BB03AC83****
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
      data: GetTenantCheckAvailableResponseBodyData,
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

