// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DumpMetaResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The status of the metadata export task. Valid values:
   * - PROCESSING: The task is being processed.
   * - FAIL: The task failed.
   * - SUCCESS: The task is completed.
   * 
   * @example
   * PROCESSING
   */
  dumpMetaStatus?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 500
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      dumpMetaStatus: 'DumpMetaStatus',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dumpMetaStatus: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DumpMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result of the task execution.
   */
  data?: DumpMetaResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36C43E96-8F68-44AA-B1AF-B1F7AB94A6C1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DumpMetaResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

