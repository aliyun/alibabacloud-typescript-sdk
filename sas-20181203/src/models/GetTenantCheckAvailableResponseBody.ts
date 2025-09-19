// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTenantCheckAvailableResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The timestamp when you can submit a quick scan task.
   * 
   * @example
   * 1725530005357
   */
  nextScanTime?: number;
  /**
   * @remarks
   * The status of the quick scan task. Enumerated values:
   * 
   * *   0: You can submit a quick scan task.
   * *   1: The current task is not complete. You cannot submit a quick scan task.
   * *   2: The free quota for this week is exhausted. You must wait for the next free scan period.
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
   * The response parameters.
   */
  data?: GetTenantCheckAvailableResponseBodyData;
  /**
   * @remarks
   * The request ID.
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

